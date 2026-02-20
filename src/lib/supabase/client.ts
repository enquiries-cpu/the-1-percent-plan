
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('Supabase credentials missing. Returning empty client shell for build/unknown environment.')
        // We return a proxy or a dummy client that won't throw on creation but will fail on calls
        // For Next.js build phase, returning an empty client or throwing a more descriptive error is better
        // but to bypass prerender errors, we must ensure this doesn't crash.
        return createBrowserClient(
            supabaseUrl || 'https://placeholder.supabase.co',
            supabaseAnonKey || 'placeholder'
        )
    }

    return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
