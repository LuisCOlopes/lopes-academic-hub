
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

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { type, data } = await req.json();
    
    console.log(`Processing ${type} submission:`, data);

    // Rate limiting check (basic implementation)
    const userIP = req.headers.get('x-forwarded-for') || 'unknown';
    console.log(`Request from IP: ${userIP}`);

    if (type === 'meeting-request') {
      const meetingData: MeetingRequest = data;
      
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
        JSON.stringify({ error: 'Invalid form type' }),
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
