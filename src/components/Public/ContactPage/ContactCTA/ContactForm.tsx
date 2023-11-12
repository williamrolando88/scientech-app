"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import InputField from "@/src/components/Shared/FormComponents/InputField";
import SelectField from "@/src/components/Shared/FormComponents/SelectField";
import TextAreaField from "@/src/components/Shared/FormComponents/TextAreaField";
import Iconify from "@/src/components/Shared/Iconify";
import { APP_ROUTES } from "@/src/routes/appRoutes";
import { sendToFormSpree } from "@/src/services/client/formSpree";
import Link from "next/link";
import { FC, useState } from "react";

const selectOptions = [
  { value: "ventas", label: "Necesito cotizar un producto" },
  { value: "proyectos", label: "Necesito ayuda para un proyecto" },
];

// const contactFormInitialValues = {
//   name: "",
//   email: "",
//   motive: "",
//   phone: "",
//   companyName: "",
//   message: "",
//   agreedTermsAndConditionsAndPrivacyPolicy: false,
// };

const ContactForm: FC = () => {
  const [formSubmitted] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);

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
          {/* <Formik
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
            )}
          </Formik> */}
          <form className="mt-2 flex flex-col gap-4" action={sendToFormSpree}>
            <InputField name="name" label="Nombre" required />

            <div className="flex flex-col gap-4 lg:flex-row">
              <InputField
                name="email"
                type="email"
                label="Correo Electrónico"
                required
              />

              <InputField name="phone" label="Teléfono" required />
            </div>

            <SelectField
              options={selectOptions}
              name="motive"
              label="Motivo"
              required
            />

            <InputField name="companyName" label="Nombre de la Empresa" />

            <TextAreaField
              rows={4}
              name="message"
              label="Información Adicional"
              required
            />

            <div>
              <div className="flex items-baseline gap-2">
                <input
                  type="checkbox"
                  name="agreedTermsAndConditionsAndPrivacyPolicy"
                  id="agreedTermsAndConditionsAndPrivacyPolicy"
                />
                <label htmlFor="agreedTermsAndConditionsAndPrivacyPolicy">
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

              {/* <HelperText helperText={} error={} /> */}
            </div>

            <Button className="self-end" type="submit">
              Enviar
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
