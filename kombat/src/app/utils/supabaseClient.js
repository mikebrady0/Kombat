import { createClient } from '@supabase/supabase-js';

NEXT_PUBLIC_SUPABASE_URL=https://jhupzpkoiogtbssbpnfo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodXB6cGtvaW9ndGJzc2JwbmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNzc2MjcsImV4cCI6MjA1NDk1MzYyN30.ZiWgDgIvk4k1tup9Px_8Ti33rxjr_owNY9ghBdr186A
            
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseAnonKey);



export const supabase = createClient(supabaseUrl, supabaseAnonKey);

