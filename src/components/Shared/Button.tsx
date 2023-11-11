import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Prop to add an icon to the button */
  icon?: ReactNode;
  /** Indicates the icon position, default to `"start"` */
  position?: "start" | "end";
}

/** Shortcut component to easily create buttons with icons */
const Button: FC<Props> = ({
  children,
  icon,
  className = "",
  position = "start",
  ...props
}) => {
  return (
    <button className={"flex items-center gap-2" + " " + className} {...props}>
      {icon && position === "start" && icon}
      {children}
      {icon && position === "end" && icon}
    </button>
  );
};

export default Button;
