import supabase from "./supabase";

export async function getBookings() {
  let { data, error } = await supabase
    .from("bookings")
    .select(
      "*,guests(first_name,last_name,email,nationality,nationalId),service(price,discount,duration,quality)"
    );

  if (error) throw error;

  return data;
}

export async function getBooking(id) {
  let { data, error } = await supabase
    .from("bookings")
    .select(
      "*,guests(first_name,last_name,email,nationality,nationalId),service(price,discount,duration,quality)"
    )
    .eq("id", id);
  if (error) throw error;

  return data;
}

export async function updateBookingCheckin(id) {
  console.log(id);
  const { data, error } = await supabase
    .from("bookings")
    .update({
      status: "checked-in",
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  console.log(data);
  return data;
}

export async function updateBookingCheckout(id) {
  console.log(id);
  const { data, error } = await supabase
    .from("bookings")
    .update({
      status: "checked-out",
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  console.log(data);
  return data;
}

export async function deleteBooking(id) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) throw error;
}
