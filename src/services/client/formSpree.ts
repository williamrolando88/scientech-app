"use server";

import { ContactUsFormSchema } from "@/src/lib/parsers/contactForm";
import { validateFormData } from "@/src/lib/utils/validateFormData";
import { APP_ROUTES } from "@/src/routes/appRoutes";
import { ContactUsForm, MotiveOptions } from "@/src/types/contactForm";
import { redirect } from "next/navigation";

export type State = {
  errors?: Record<string, string[]>;
  message?: string | null;
};

const getUrl = (motive: MotiveOptions) => {
  switch (motive) {
    case "ventas":
      return process.env.FORMSPREE_SALES || "";
    case "proyectos":
      return process.env.FORMSPREE_PROJECTS || "";
  }
};

export const sendToFormSpree = async (_: State, formData: FormData) => {
  const motive = formData.get("motive");

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

  if (response.status !== 200) {
    return { message: `${response.status}. Something went wrong` };
  }

  redirect(APP_ROUTES.public.contact + "?submitted=true");
};
