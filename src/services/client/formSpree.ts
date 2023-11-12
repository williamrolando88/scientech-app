"use server";

import { ContactUsFormSchema } from "@/src/lib/parsers/contactForm";
import { validateFormData } from "@/src/lib/utils/validateFormData";
import { ContactUsForm, MotiveOptions } from "@/src/types/contactForm";

const getUrl = (motive: MotiveOptions) => {
  switch (motive) {
    case "ventas":
      return process.env.FORMSPREE_SALES || "";
    case "proyectos":
      return process.env.FORMSPREE_PROJECTS || "";
  }
};

export const sendToFormSpree = async (formData: FormData) => {
  const motive = formData.get("motive");

  // eslint-disable-next-line no-console
  console.log("formData: ", formData);

  const { data, errors, message } = validateFormData<ContactUsForm>(
    formData,
    ContactUsFormSchema,
  );

  if (!data) {
    return { errors, message };
  }

  const body = new FormData();

  Object.entries(data).forEach((entry) => {
    if (entry[0] !== "motive") {
      if (entry[0] === "agreedTermsAndConditionsAndPrivacyPolicy") {
        body.append("agreedTermsAndConditionsAndPrivacyPolicy", "true");
      } else {
        body.append(...entry);
      }
    }
  });

  const url = getUrl(motive as MotiveOptions);

  const response = await fetch(url, {
    method: "POST",
    body,
    headers: {
      Accept: "application/json",
    },
  });

  return response.status;
};

// export const sendToFormSpree = async (formInput: ContactUsForm) => {
//   const { motive, ...form } = formInput;
//   const url = getUrl(motive as MotiveOptions);

//   const body = new FormData();

//   Object.entries(form).forEach((entry) => {
//     // @ts-expect-error - must allow having true value
//     body.append(...entry);
//   });

//   const response = await fetch(url, {
//     method: "POST",
//     body,
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   return response.status;
// };
