import { AnyZodObject } from "zod";

export function validateFormData<T>(
  formData: FormData,
  zodParser: AnyZodObject,
): { errors?: Record<any, any>; message?: string; data?: T } {
  const formObject = Object.fromEntries(formData.entries());
  const parsedResponse = zodParser.safeParse(formObject);

  if (!parsedResponse.success) {
    return {
      errors: parsedResponse.error.flatten().fieldErrors,
      message: "Missing Fields.",
    };
  }

  return { data: parsedResponse.data as T };
}
