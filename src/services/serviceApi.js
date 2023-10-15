import supabase from "./supabase";

export async function getService() {
  let { data, error } = await supabase.from("service").select("*");
  if (error) throw error;

  return data;
}

export async function getSingleService(id) {
  let { data, error } = await supabase.from("service").select("*").eq("id", id);
  if (error) throw error;

  return data;
}
