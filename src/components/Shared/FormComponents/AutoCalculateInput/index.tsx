"use client";

import { round } from "lodash";
import { evaluate } from "mathjs";
import {
  FC,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from "react";

export interface AutoCalculateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "name"> {
  /** Input name */
  name?: string;
  /** Value setter. Use formik `setFieldValue` function for the best compatibility */
  onCalculationDone?: (_field: string, _value: number) => void;
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
const AutoCalculateInput: FC<AutoCalculateInputProps> = forwardRef(
  (
    { name, value = 0, onCalculationDone, ...props },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [inputValue, setInputValue] = useState((value as number).toString());

    const handleBlur = () => {
      if (!name || !onCalculationDone) return;

      try {
        const calculate = evaluate(inputValue);

        if (typeof calculate === "number") {
          setInputValue(round(calculate, 2).toString());
          onCalculationDone(name, round(calculate, 2));
        } else {
          setInputValue("0");
          onCalculationDone(name, 0);
        }
      } catch (error) {
        setInputValue("0");
        onCalculationDone(name, 0);
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
        ref={ref}
        name={name}
        onBlur={handleBlur}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    );
  },
);

export default AutoCalculateInput;
