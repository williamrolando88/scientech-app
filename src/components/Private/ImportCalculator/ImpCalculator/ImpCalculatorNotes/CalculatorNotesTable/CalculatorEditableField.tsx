"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import InputField from "@/src/components/Shared/FormComponents/InputField";
import Iconify from "@/src/components/Shared/Iconify";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC, useRef, useState } from "react";

interface CalculatorEditableFieldProps {
  index: number;
}
export const CalculatorEditableField: FC<CalculatorEditableFieldProps> = ({
  index,
}) => {
  const { values, setFieldValue, deleteNote } = useImpCalculatorContext();
  const storedValue = values.notes[index].body;
  const [disabled, setDisabled] = useState(true);
  const [currentValue, setCurrentValue] = useState(storedValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDoubleClick = () => {
    if (!inputRef.current) return;

    setDisabled(false);
    inputRef.current.focus();
    inputRef.current.select();
  };

  const cancelEdit = () => {
    if (!inputRef.current) return;

    setCurrentValue(storedValue);
    setDisabled(true);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!inputRef.current) return;

    if (e.key === "Enter") {
      e.preventDefault();
      if (currentValue) {
        await setFieldValue(`notes[${index}].body`, currentValue);
        inputRef.current.blur();
        setDisabled(true);
      } else {
        deleteNote(index);
      }
    }

    if (e.key === "Escape") {
      cancelEdit();
    }
  };

  const handleBlur = () => {
    cancelEdit();
  };

  const isLink =
    storedValue &&
    typeof storedValue === "string" &&
    storedValue.startsWith("https://");

  // eslint-disable-next-line no-console
  console.log(inputRef.current);

  return (
    <div className="flex gap-2">
      {isLink && (
        <a href={storedValue} target="_blank" rel="noreferrer">
          <Button type="button" variant="secondary">
            <Iconify icon="pajamas:external-link" />
          </Button>
        </a>
      )}

      <div onDoubleClick={handleDoubleClick} className="grow">
        <InputField
          // @ts-ignore
          ref={inputRef}
          key={index}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
      </div>

      <Button type="button" variant="error" onClick={() => deleteNote(index)}>
        <Iconify icon="pajamas:remove" />
      </Button>
    </div>
  );
};
