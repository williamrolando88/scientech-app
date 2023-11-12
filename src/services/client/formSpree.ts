"use server";

import { ContactUsForm, MotiveOptions } from "@/src/types/contactForm";

const getUrl = (motive: MotiveOptions) => {
  switch (motive) {
    case "ventas":
      return process.env.FORMSPREE_SALES || "";
    case "proyectos":
      return process.env.FORMSPREE_PROJECTS || "";
  }
};

export const sendToFormSpree = async (formInput: ContactUsForm) => {
  const { motive, ...form } = formInput;
  const url = getUrl(motive as MotiveOptions);

  const body = new FormData();

  Object.entries(form).forEach((entry) => {
    // @ts-expect-error - must allow having true value
    body.append(...entry);
  });

  const response = await fetch(url, {
    method: "POST",
    body,
    headers: {
      Accept: "application/json",
    },
  });

  return response.status;
};
