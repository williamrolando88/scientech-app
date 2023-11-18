"use client";

import Iconify from "@/src/components/Shared/Iconify";
import { authenticate } from "@/src/lib/actions/auth";
import { lusitana } from "@/src/lib/utils/fonts";
import { FC, useState } from "react";
import { useFormState } from "react-dom";
import Button from "../../Shared/FormComponents/Button";
import InputField from "../../Shared/FormComponents/InputField";

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [code, action] = useFormState(authenticate, undefined);

  return (
    <form
      action={action}
      className="flex flex-col gap-5 rounded-lg bg-gray-50 px-6 pb-4 pt-8"
    >
      <h1 className={`${lusitana.className} text-2xl`}>Bienvenido</h1>

      <div className="w-full">
        <InputField
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          label="Email"
          icon={<Iconify icon="eva:at-fill" />}
        />

        <br />

        <InputField
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          label="Password"
          icon={
            showPassword ? (
              <button type="button" onClick={() => setShowPassword(false)}>
                <Iconify icon="eva:eye-off-2-fill" />
              </button>
            ) : (
              <button type="button" onClick={() => setShowPassword(true)}>
                <Iconify icon="eva:eye-outline" />
              </button>
            )
          }
        />
      </div>

      <Button icon={<Iconify icon="ic:round-login" />}>Log in</Button>

      {code === "CredentialSignin" && (
        <div className="flex h-8 items-end space-x-1 text-red-500">
          <Iconify icon="eva:alert-circle-outline" />

          <p aria-live="polite" className="text-sm ">
            Invalid credentials
          </p>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
