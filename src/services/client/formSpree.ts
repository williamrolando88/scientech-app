import { ContactUsForm } from "@/src/types/contactForm";

export const sendToFormSpree = async (
  url: string,
  form: Partial<ContactUsForm>,
) => {
  const body = new FormData();
  Object.entries(form).forEach((entry) => {
    // @ts-expect-error - must allow having true value
    body.append(...entry);
  });

  return await fetch(url, {
    method: "POST",
    body,
    headers: {
      Accept: "application/json",
    },
  });
};
