"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import HelperText from "@/src/components/Shared/FormComponents/HelperText";
import InputField from "@/src/components/Shared/FormComponents/InputField";
import SelectField from "@/src/components/Shared/FormComponents/SelectField";
import TextAreaField from "@/src/components/Shared/FormComponents/TextAreaField";
import Iconify from "@/src/components/Shared/Iconify";
import { ContactUsFormSchema } from "@/src/lib/parsers/contactForm";
import { APP_ROUTES } from "@/src/routes/appRoutes";
import { sendToFormSpree } from "@/src/services/client/formSpree";
import { Form, Formik } from "formik";
import Link from "next/link";
import { FC, useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

const selectOptions = [
  { value: "ventas", label: "Necesito cotizar un producto" },
  { value: "proyectos", label: "Necesito ayuda para un proyecto" },
];

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
  const [formSubmitted, setFormSubmitted] = useState(false);

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
              const status = await sendToFormSpree(values);

              actions.setSubmitting(false);

              if (status === 200) {
                setFormSubmitted(true);
                actions.resetForm();
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              setValues,
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

                <SelectField
                  options={selectOptions}
                  name="motive"
                  label="Motivo"
                  value={values.motive}
                  onChange={handleChange}
                  error={touched.motive && !!errors.motive}
                  helperText={touched.motive ? errors.motive : ""}
                  required
                />

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

                <div>
                  <div className="flex items-baseline gap-2">
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

                  <HelperText
                    helperText={
                      touched.agreedTermsAndConditionsAndPrivacyPolicy
                        ? errors.agreedTermsAndConditionsAndPrivacyPolicy
                        : ""
                    }
                    error={
                      touched.agreedTermsAndConditionsAndPrivacyPolicy &&
                      !!errors.agreedTermsAndConditionsAndPrivacyPolicy
                    }
                  />
                </div>

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