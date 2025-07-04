
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://davteiwwhttujupjjquu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhdnRlaXd3aHR0dWp1cGpqcXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NDUzNTUsImV4cCI6MjA2NjEyMTM1NX0.GZnTBW3cwVQ5jgw6P3vWbW3rbws5OLmhtszkc2HIOXU';


export const supabase = createClient(supabaseUrl, supabaseKey);
