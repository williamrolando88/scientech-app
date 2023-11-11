"use client";
import { useFormStatus } from "react-dom";
import Button from "../../Shared/Button";
import Iconify from "../../Shared/Iconify";

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <Iconify icon="eva:chevron-right-outline" />
    </Button>
  );
}
