"use server";

export async function submitTestForm(
  _: string | undefined,
  formData: FormData,
) {
  // eslint-disable-next-line no-console
  console.log(formData);

  return "ok";
}
