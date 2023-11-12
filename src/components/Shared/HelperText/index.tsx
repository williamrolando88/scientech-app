import clsx from "clsx";
import { FC } from "react";
import Iconify from "../Iconify";

interface Props {
  /** The text to be shown */
  helperText?: string;
  /** Shows when to flag as error */
  error?: boolean;
}

const HelperText: FC<Props> = ({ error, helperText }) => {
  if (!helperText) return null;

  return (
    <div
      className={clsx("flex items-center gap-1", {
        "text-red-500": error,
      })}
    >
      <Iconify icon="eva:alert-circle-outline" />
      <p className="text-xs italic">{helperText}</p>
    </div>
  );
};

export default HelperText;
