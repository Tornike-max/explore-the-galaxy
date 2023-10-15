import supabase, { supabaseUrl } from "./supabase";

export async function getAllObservatories() {
  let { data: observatory, error } = await supabase
    .from("observatory")
    .select("*");

  if (error) throw error;

  return observatory;
}

export async function getSingleObservatory(id) {
  let { data: observatory, error } = await supabase
    .from("observatory")
    .select("*")
    .eq("id", id);

  if (error) throw error;

  return observatory;
}

export async function createNewObservatory(newObj) {
  console.log(newObj);
  //https://siqxbxkwgcubmpmwecdh.supabase.co/storage/v1/object/public/observatory_images/mauna-kea.jpg
  const imageName = `${Math.random()}-${newObj?.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/observatory_images/${imageName}`;

  const { data, error } = await supabase
    .from("observatory")
    .insert([{ ...newObj, image: imagePath }])
    .select()
    .single();

  if (error) throw error;

  console.log(newObj);
  const { error: storageError } = await supabase.storage
    .from("observatory_images")
    .upload(imageName, newObj?.image);

  if (storageError) throw new Error(storageError.message);
  // if (storageError) {
  //   await supabase.from("observatory").delete().eq("id", data.id);
  //   throw new Error("observatory image could not be uploaded successfully");
  // }
  return data;
}

export async function editObservatory(editValus, id) {
  if (!id || !editValus) return;
  const imageName = `${Math.random()}-${editValus?.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/observatory_images/${imageName}`;
  const { data, error } = await supabase

    .from("observatory")
    .update({ ...editValus, image: imagePath })
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);

  const { error: storageError } = await supabase.storage
    .from("observatory_images")
    .upload(imageName, editValus.image);

  if (storageError) throw new Error(storageError.message);

  return data;
}

export async function deleteObservatory(id) {
  const { error } = await supabase.from("observatory").delete().eq("id", id);

  if (error) throw error;
}
