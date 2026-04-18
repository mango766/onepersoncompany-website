import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Client-side anon client (only for inserts via RLS)
export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
