import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function getUser() {
  const {
    data: { user, error },
  } = await supabase.auth.getUser();
  if (error) throw new Error("error while login");
  console.log(user);
  return { user, error };
}

export async function signUp({ email, password, first_name, last_name }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        last_name,
        first_name,
      },
    },
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return { data };
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateUser({ email, first_name, last_name }) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    data: {
      first_name,
      last_name,
    },
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function updatePassword({ password }) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}
