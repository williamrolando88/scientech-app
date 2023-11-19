"use client";

import { round } from "lodash";
import { evaluate } from "mathjs";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";

export interface AutoCalculateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "name"> {
  /** Input name */
  name: string;
  /** Use formik `setFieldValue` function for the best compatibility */
  onChange: (field: string, value: number) => void;
}

/**
 * Unstyled input component that autocalculates the value when the input
 * loses focus.
 *
 * This component uses mathjs under the hood, this makes it possible to
 * autocalculate basic mathematical operations. The same way an spreadsheet
 * does.
 *
 */
const AutoCalculateInput: FC<AutoCalculateInputProps> = ({
  name,
  value = 0,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState((value as number).toString());

  const handleBlur = () => {
    if (!name) return;

    try {
      const calculate = evaluate(inputValue);

      if (typeof calculate === "number") {
        setInputValue(round(calculate, 2).toString());
        onChange(name, round(calculate, 2));
      } else {
        setInputValue("0");
        onChange(name, 0);
      }
    } catch (error) {
      setInputValue("0");
      onChange(name, 0);
    }
  };

  useEffect(() => {
    if (value === 0) {
      setInputValue("0");
    }
  }, [value]);

  return (
    <input
      {...props}
      name={name}
      onBlur={handleBlur}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};

export default AutoCalculateInput;
