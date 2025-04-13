import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cjjblomvvijynrktyksu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqamJsb212dmlqeW5ya3R5a3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MDcwNzIsImV4cCI6MjA1NjQ4MzA3Mn0.-Lh03g65l6Q7YT7PdwOEIxa0fK0xqlRs64Pc6v7rI6g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
