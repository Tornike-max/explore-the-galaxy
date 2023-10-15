import supabase from "./supabase";

export async function getPlanets() {
  let { data: planets, error } = await supabase.from("planets").select("*");

  if (error) throw error;

  return planets;
}

export async function getPlanet(id) {
  let { data: planet, error } = await supabase
    .from("planets")
    .select("*")
    .eq("id", id);
  if (error) throw error;

  return planet;
}
