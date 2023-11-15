"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Prop to add an icon to the button */
  icon?: ReactNode;
  /** Indicates the icon position */
  position?: "start" | "end";
  /** Indicates the button color */
  variant?: "primary" | "secondary" | "terciary";
  /** Indicates the button size */
  size?: "small" | "medium" | "large" | "extra-large";
}

/** Shortcut component to easily create buttons with icons */
const Button: FC<Props> = ({
  children,
  icon = null,
  className = "",
  position = "start",
  variant = "primary",
  size = "medium",
  ...props
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 rounded font-semibold",
        {
          "bg-primary-default text-white hover:bg-primary-dark":
            variant === "primary",
          "bg-secondary-default text-white hover:bg-secondary-dark":
            variant === "secondary",
          "bg-terciary-default text-black hover:bg-terciary-dark":
            variant === "terciary",
          "px-2 py-1": size === "small",
          "px-4 py-2": size === "medium",
          "px-6 py-3": size === "large",
          "px-8 py-4": size === "extra-large",
        },
        className,
      )}
      {...props}
      disabled={props.disabled || pending}
    >
      {icon && position === "start" && icon}
      {children}
      {icon && position === "end" && icon}
    </button>
  );
};

export default Button;
