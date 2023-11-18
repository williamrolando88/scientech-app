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
  error,
  icon,
  label,
  iconPosition = "start",
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

      <div className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 focus-within:ring-2">
        {icon && iconPosition === "start" && icon}

        <input
          className={clsx(
            "peer block w-full text-ellipsis whitespace-nowrap border-none p-0  text-sm outline-2 placeholder:text-gray-500 focus:ring-0",
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
