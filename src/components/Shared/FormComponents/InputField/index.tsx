import clsx from "clsx";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import HelperText from "../HelperText";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /** Shows the helper text as error */
  error?: boolean;
  /** Shows a helper text below the input */
  helperText?: string;
  /** Adds an icon to the field */
  icon?: ReactNode;
  /** Indicates the icon position */
  iconPosition?: "start" | "end";
  /** Input label */
  label?: string;
}

const InputField: FC<Props> = ({
  helperText,
  iconPosition,
  error,
  icon,
  label,
  ...props
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label
          className={clsx("block text-xs font-medium text-gray-900", {
            "text-red-500": error,
          })}
          htmlFor={props.id}
        >
          {`${label}${props.required ? "*" : ""}`}
        </label>
      )}

      <div className="relative flex gap-2">
        {icon && iconPosition === "start" && icon}

        <input
          className={clsx(
            "peer block w-full rounded-md border border-gray-200 px-4 py-2 text-sm outline-2 placeholder:text-gray-500",
            {
              "border-red-500 text-red-500 placeholder:text-red-500": error,
            },
          )}
          {...props}
        />

        {icon && iconPosition === "end" && icon}
      </div>

      <HelperText helperText={helperText} error={error} />
    </div>
  );
};

export default InputField;
