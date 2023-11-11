import clsx from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Prop to add an icon to the button */
  icon?: ReactNode;
  /** Indicates the icon position @default start */
  position?: "start" | "end";
  /** Indicates the button color @default primary */
  variant?: "primary" | "secondary" | "terciary";
}

/** Shortcut component to easily create buttons with icons */
const Button: FC<Props> = ({
  children,
  icon = null,
  className = "",
  position = "start",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 rounded px-4 py-2 font-semibold",
        {
          "bg-primary-default text-white hover:bg-primary-dark":
            variant === "primary",
          "bg-secondary-default text-white hover:bg-secondary-dark":
            variant === "secondary",
          "bg-terciary-default text-black hover:bg-terciary-dark":
            variant === "terciary",
        },
        className,
      )}
      {...props}
    >
      {icon && position === "start" && icon}
      {children}
      {icon && position === "end" && icon}
    </button>
  );
};

export default Button;
