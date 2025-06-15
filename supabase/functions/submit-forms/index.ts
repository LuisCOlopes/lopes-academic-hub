
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface MeetingRequest {
  firstName: string;
  lastName: string;
  email: string;
  institution?: string;
  meetingFormat: 'presencial' | 'teams' | 'meet';
  meetingType?: 'academic' | 'research' | 'collaboration' | 'consulting' | 'other';
  preferredDate: string;
  preferredTime: string;
  subject: string;
  description?: string;
  additionalInfo?: string;
}

interface ContactMessage {
  firstName: string;
  lastName: string;
  email: string;
  institution?: string;
  subject: string;
  message: string;
}

// Simple in-memory rate limiting (for basic protection)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // max 5 requests per 15 minutes per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const key = ip;
  
  const current = rateLimitMap.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  current.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000); // cleanup every 5 minutes

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Método não permitido' }),
      { 
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }

  try {
    // Rate limiting check
    const userIP = req.headers.get('x-forwarded-for') || 
                   req.headers.get('x-real-ip') || 
                   'unknown';
    
    if (!checkRateLimit(userIP)) {
      console.log(`Rate limit exceeded for IP: ${userIP}`);
      return new Response(
        JSON.stringify({ error: 'Muitas tentativas. Tente novamente em 15 minutos.' }),
        { 
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`Request from IP: ${userIP}`);

    // Use Supabase environment variables - these are automatically available in edge functions
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { type, data } = await req.json();
    
    // Validate request structure
    if (!type || !data) {
      return new Response(
        JSON.stringify({ error: 'Dados da solicitação inválidos' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    
    console.log(`Processing ${type} submission:`, data);

    if (type === 'meeting-request') {
      const meetingData: MeetingRequest = data;
      
      // Basic data validation
      if (!meetingData.firstName || !meetingData.lastName || !meetingData.email || 
          !meetingData.subject || !meetingData.preferredDate || !meetingData.preferredTime) {
        return new Response(
          JSON.stringify({ error: 'Campos obrigatórios não preenchidos' }),
          { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      // Insert meeting request
      const { data: result, error } = await supabase
        .from('meeting_requests')
        .insert({
          first_name: meetingData.firstName,
          last_name: meetingData.lastName,
          email: meetingData.email,
          institution: meetingData.institution || null,
          meeting_format: meetingData.meetingFormat,
          meeting_type: meetingData.meetingType || null,
          preferred_date: meetingData.preferredDate,
          preferred_time: meetingData.preferredTime,
          subject: meetingData.subject,
          description: meetingData.description || null,
          additional_info: meetingData.additionalInfo || null,
        })
        .select()
        .single();

      if (error) {
        console.error('Error inserting meeting request:', error);
        throw error;
      }

      console.log('Meeting request created:', result.id);
      
      return new Response(
        JSON.stringify({ success: true, id: result.id }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (type === 'contact-message') {
      const contactData: ContactMessage = data;
      
      // Basic data validation
      if (!contactData.firstName || !contactData.lastName || !contactData.email || 
          !contactData.subject || !contactData.message) {
        return new Response(
          JSON.stringify({ error: 'Campos obrigatórios não preenchidos' }),
          { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      // Insert contact message
      const { data: result, error } = await supabase
        .from('contact_messages')
        .insert({
          first_name: contactData.firstName,
          last_name: contactData.lastName,
          email: contactData.email,
          institution: contactData.institution || null,
          subject: contactData.subject,
          message: contactData.message,
        })
        .select()
        .single();

      if (error) {
        console.error('Error inserting contact message:', error);
        throw error;
      }

      console.log('Contact message created:', result.id);
      
      return new Response(
        JSON.stringify({ success: true, id: result.id }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else {
      return new Response(
        JSON.stringify({ error: 'Tipo de formulário inválido' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

  } catch (error) {
    console.error('Form submission error:', error);
    
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
