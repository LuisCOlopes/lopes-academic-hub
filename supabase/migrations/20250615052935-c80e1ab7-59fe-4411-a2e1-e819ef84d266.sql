
-- Remove overly permissive policies that allow any authenticated user to view contact messages and meeting requests
DROP POLICY IF EXISTS "Authenticated users can view contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated users can view meeting requests" ON public.meeting_requests;

-- Remove duplicate "Anyone can submit..." policies if they exist
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Anyone can submit meeting requests" ON public.meeting_requests;

-- Ensure we only have the secure policies:
-- 1. Public can insert (for contact forms)
-- 2. Only admins can view and update (for management)

-- Verify the correct policies exist (these should already be in place from previous migrations)
-- If not, they will be created:

DO $$
BEGIN
    -- Check and create INSERT policy for contact_messages if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Anyone can insert contact messages'
    ) THEN
        CREATE POLICY "Anyone can insert contact messages" 
          ON public.contact_messages 
          FOR INSERT 
          WITH CHECK (true);
    END IF;

    -- Check and create INSERT policy for meeting_requests if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'meeting_requests' 
        AND policyname = 'Anyone can insert meeting requests'
    ) THEN
        CREATE POLICY "Anyone can insert meeting requests" 
          ON public.meeting_requests 
          FOR INSERT 
          WITH CHECK (true);
    END IF;

    -- Check and create admin SELECT policy for contact_messages if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Admins can view contact messages'
    ) THEN
        CREATE POLICY "Admins can view contact messages"
          ON public.contact_messages
          FOR SELECT
          USING (public.is_admin());
    END IF;

    -- Check and create admin SELECT policy for meeting_requests if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'meeting_requests' 
        AND policyname = 'Admins can view meeting requests'
    ) THEN
        CREATE POLICY "Admins can view meeting requests"
          ON public.meeting_requests
          FOR SELECT
          USING (public.is_admin());
    END IF;

    -- Check and create admin UPDATE policy for contact_messages if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_messages' 
        AND policyname = 'Admins can update contact messages'
    ) THEN
        CREATE POLICY "Admins can update contact messages"
          ON public.contact_messages
          FOR UPDATE
          USING (public.is_admin());
    END IF;

    -- Check and create admin UPDATE policy for meeting_requests if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'meeting_requests' 
        AND policyname = 'Admins can update meeting requests'
    ) THEN
        CREATE POLICY "Admins can update meeting requests"
          ON public.meeting_requests
          FOR UPDATE
          USING (public.is_admin());
    END IF;
END $$;
