
-- Remove duplicate "Authenticated users can update..." policies that conflict with admin-only policies
DROP POLICY IF EXISTS "Authenticated users can update contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated users can update meeting requests" ON public.meeting_requests;
