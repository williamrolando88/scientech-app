"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import InputField from "@/src/components/Shared/FormComponents/InputField";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { Dialog } from "@headlessui/react";
import { FC } from "react";

interface SaveConfirmationProps {
  open: boolean;
  setOpen: (_open: boolean) => void;
}
export const SaveConfirmation: FC<SaveConfirmationProps> = ({ open, setOpen }) => {
  const { values, handleChange } = useImpCalculatorContext();
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeModal}>
      <Dialog.Panel>
        <Dialog.Title>Guardar calculo</Dialog.Title>
        <InputField
          value={values.metadata.description}
          name="metadata.description"
          onChange={handleChange}
        />
        <Dialog.Description>¿Desea guardar el calculo?</Dialog.Description>
        <Button onClick={closeModal}>Cancelar</Button>
        <Button type="submit">Guardar</Button>
      </Dialog.Panel>
    </Dialog>
  );
};
