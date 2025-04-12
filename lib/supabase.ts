// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://pjjnulxbsnlafuvsjsrc.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqam51bHhic25sYWZ1dnNqc3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTczNjEsImV4cCI6MjA1OTY3MzM2MX0.Fs_XRfdXVu8sGd087b8qsurSWaRG5y7qq2o8goTJMAM';

console.log('process.env:', process.env);
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey ? 'Loaded' : 'Not Loaded');
export const supabase = createClient(supabaseUrl, supabaseKey);
