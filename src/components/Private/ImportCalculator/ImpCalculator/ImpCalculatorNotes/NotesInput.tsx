"use client";

import InputField from "@/src/components/Shared/FormComponents/InputField";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { useRef } from "react";

export const NotesInput = () => {
  const { addNote } = useImpCalculatorContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      if (inputRef.current.value) {
        addNote(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.blur();
      }
    }

    if (e.key === "Escape") {
      inputRef.current.value = "";
      inputRef.current.blur();
    }
  };

  // eslint-disable-next-line no-console
  console.log(inputRef.current?.value);

  return (
    <InputField
      // @ts-ignore
      ref={inputRef}
      onKeyDown={handleKeyDown}
      helperText="Presiona ENTER para agregar, DOBLE CLICK para editar, presiona ESC para cancelar"
    />
  );
};
