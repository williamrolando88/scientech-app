import clsx from "clsx";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import AutoCalculateInput from "../AutoCalculateInput";
import HelperText from "../HelperText";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /** Shows the helper text as error */
  error?: boolean;
  /** Shows a helper text below the input */
  helperText?: string;
  /** Start adornment to be placed before the input field */
  startAdornment?: ReactNode;
  /** End adornment to be placed end the input field */
  endAdornment?: ReactNode;
  /** Input label */
  label?: string;
  /** Value setter. Use formik `setFieldValue` function for the best compatibility */
  onCalculationDone?: (_field: string, _value: number) => void;
}

const InputField: FC<Props> = ({
  helperText,
  error,
  label,
  onCalculationDone,
  type = "text",
  startAdornment = null,
  endAdornment = null,
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

      <div
        className={clsx(
          "flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 focus-within:ring-2",
          {
            "border-red-500 fill-red-500 text-red-500 ring-red-500": error,
          },
        )}
      >
        {startAdornment}

        {type !== "number" ? (
          <input
            className={clsx(
              "peer block w-full text-ellipsis whitespace-nowrap border-none p-0  text-sm outline-2 placeholder:text-gray-500 focus:ring-0",
              {
                "text-red-500 placeholder:text-red-500": error,
              },
            )}
            {...props}
          />
        ) : (
          <AutoCalculateInput
            className={clsx(
              "peer block w-full text-ellipsis whitespace-nowrap border-none p-0  text-sm outline-2 placeholder:text-gray-500 focus:ring-0",
              {
                "text-red-500 placeholder:text-red-500": error,
              },
            )}
            onCalculationDone={onCalculationDone}
            {...props}
          />
        )}

        {endAdornment}
      </div>

      <HelperText helperText={helperText} error={error} />
    </div>
  );
};

export default InputField;
