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
    <form action={action} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Bienvenido</h1>

        <div className="w-full">
          <InputField
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            label="Email"
            icon={<Iconify icon="eva:at-fill" />}
            iconPosition="end"
          />
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>

            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>

            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />

              {showPassword ? (
                <button onClick={() => setShowPassword(false)}>
                  <Iconify icon="eva:eye-off-2-fill" />
                </button>
              ) : (
                <button onClick={() => setShowPassword(true)}>
                  <Iconify icon="eva:eye-outline" />
                </button>
              )}
            </div>
          </div>
        </div>

        <Button />

        <div className="flex h-8 items-end space-x-1 text-red-500">
          {code === "CredentialSignin" && (
            <>
              <Iconify icon="eva:alert-circle-outline" />

              <p aria-live="polite" className="text-sm ">
                Invalid credentials
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
