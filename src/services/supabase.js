import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://siqxbxkwgcubmpmwecdh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpcXhieGt3Z2N1Ym1wbXdlY2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NzIwMDEsImV4cCI6MjAxMjQ0ODAwMX0.hpDH_ftx_oZqx0RlcIjRIKXib1tbMuL8DccR7uUgcok";
export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
