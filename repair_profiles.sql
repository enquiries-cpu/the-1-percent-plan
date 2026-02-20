
-- REPAIR SCRIPT: Sync existing Auth users to the Profiles table
-- Run this in the Supabase SQL Editor

INSERT INTO public.profiles (id, email, display_name, role)
SELECT 
    id, 
    email, 
    COALESCE(raw_user_meta_data->>'display_name', split_part(email, '@', 1)), 
    'user'
FROM auth.users
WHERE id NOT IN (SELECT id FROM public.profiles)
ON CONFLICT (id) DO NOTHING;

-- Verification
SELECT count(*) FROM public.profiles;
