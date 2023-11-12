"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import Iconify from "@/src/components/Shared/Iconify";
import { useFormStatus } from "react-dom";

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <Iconify icon="eva:chevron-right-outline" />
    </Button>
  );
}
