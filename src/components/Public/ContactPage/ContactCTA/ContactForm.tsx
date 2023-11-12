"use client";

import Button from "@/src/components/Shared/Button";
import Iconify from "@/src/components/Shared/Iconify";
import InputField from "@/src/components/Shared/InputField";
import TextAreaField from "@/src/components/Shared/TextAreaField";
import { ContactUsFormSchema } from "@/src/lib/parsers/contactForm";
import { APP_ROUTES } from "@/src/routes/appRoutes";
// import { sendToFormSpree } from "@services/contactUs/formSpree";
import { Form, Formik } from "formik";
import Link from "next/link";
import { FC, useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

// type MotiveOptions = "ventas" | "proyectos";

const contactFormInitialValues = {
  name: "",
  email: "",
  motive: "",
  phone: "",
  companyName: "",
  message: "",
  agreedTermsAndConditionsAndPrivacyPolicy: false,
};

const ContactForm: FC = () => {
  const [formSubmitted] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);

  // const getUrl = (motive: MotiveOptions) => {
  //   switch (motive) {
  //     case "ventas":
  //       return process.env.VITE_FORMSPREE_SALES;
  //     case "proyectos":
  //       return process.env.VITE_FORMSPREE_PROJECTS;
  //   }
  // };

  return (
    <div className="flex h-full flex-col justify-center">
      {formSubmitted ? (
        <div className="flex h-full flex-col items-center justify-center">
          <Iconify
            className="text-green-600"
            size="200"
            icon="eva:checkmark-circle-fill"
          />
          <p className="text-center">
            Gracias por escribirnos, en breve nos pondremos en contacto contigo
          </p>
          <Link className="my-6" href={APP_ROUTES.public.root}>
            <Button>Volver a Inicio</Button>
          </Link>
        </div>
      ) : (
        <>
          <em className="text-xs font-normal">*Información requerida</em>
          <Formik
            initialValues={contactFormInitialValues}
            validationSchema={toFormikValidationSchema(ContactUsFormSchema)}
            onSubmit={async (values, actions) => {
              // eslint-disable-next-line no-console
              console.log(values);

              // const { motive, ...restForm } = values;
              // const { status } = await sendToFormSpree(
              //   getUrl(motive as MotiveOptions),
              //   restForm as ContactUsForm,
              // );

              actions.setSubmitting(false);

              // if (status === 200) {
              //   setFormSubmitted(true);
              //   actions.resetForm();
              // }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              // setValues,
              isSubmitting,
            }) => (
              <Form className="mt-2 flex flex-col gap-4">
                <InputField
                  name="name"
                  label="Nombre"
                  onChange={handleChange}
                  value={values.name}
                  error={touched.name && !!errors.name}
                  helperText={touched.name ? errors.name : ""}
                  required
                />

                <div className="flex flex-col gap-4 lg:flex-row">
                  <InputField
                    name="email"
                    type="email"
                    label="Correo Electrónico"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && !!errors.email}
                    helperText={touched.email ? errors.email : ""}
                    required
                  />

                  <InputField
                    name="phone"
                    label="Teléfono"
                    onChange={handleChange}
                    value={values.phone}
                    error={!!errors.phone && touched.phone}
                    helperText={touched.phone ? errors.phone : ""}
                    required
                  />
                </div>

                {/* <HelperText helperText={touched.motive && errors.motive}>
                  <Select
                    name="motive"
                    label="Motivo*"
                    value={values.motive}
                    error={touched.motive && !!errors.motive}
                    onChange={(value) =>
                      value && setValues({ ...values, motive: value })
                    }
                  >
                    <Option value="ventas">Necesito cotizar un producto</Option>
                    <Option value="proyectos">
                      Necesito ayuda para un proyecto
                    </Option>
                  </Select>
                </HelperText> */}

                <InputField
                  name="companyName"
                  label="Nombre de la Empresa"
                  onChange={handleChange}
                  value={values.companyName}
                  error={!!errors.companyName && touched.companyName}
                  helperText={touched.companyName ? errors.companyName : ""}
                />

                <TextAreaField
                  rows={4}
                  name="message"
                  label="Información Adicional"
                  onChange={handleChange}
                  value={values.message}
                  error={!!errors.message && touched.message}
                  helperText={touched.message ? errors.message : ""}
                  required
                />

                {/* <HelperText
                  helperText={
                    touched.agreedTermsAndConditionsAndPrivacyPolicy &&
                    errors.agreedTermsAndConditionsAndPrivacyPolicy
                  }
                >
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="agreedTermsAndConditionsAndPrivacyPolicy"
                      id="agreedTermsAndConditionsAndPrivacyPolicy"
                      checked={values.agreedTermsAndConditionsAndPrivacyPolicy}
                      onChange={() =>
                        setValues({
                          ...values,
                          agreedTermsAndConditionsAndPrivacyPolicy:
                            !values.agreedTermsAndConditionsAndPrivacyPolicy,
                        })
                      }
                    />
                    <label
                      className={`${
                        touched.agreedTermsAndConditionsAndPrivacyPolicy &&
                        errors.agreedTermsAndConditionsAndPrivacyPolicy
                          ? "text-red-500"
                          : ""
                      }`}
                      htmlFor="agreedTermsAndConditionsAndPrivacyPolicy"
                    >
                      He leído y acepto los{" "}
                      <Link
                        className="text-blue-500 underline"
                        href={APP_ROUTES.public.termsAndConditions}
                        target="_blank"
                      >
                        Términos y Condiciones
                      </Link>{" "}
                      y la{" "}
                      <Link
                        className="text-blue-500 underline"
                        href={APP_ROUTES.public.privacyPolicy}
                        target="_blank"
                      >
                        Política de Privacidad
                      </Link>
                    </label>
                  </div>
                </HelperText> */}

                <Button
                  className="self-end"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default ContactForm;
