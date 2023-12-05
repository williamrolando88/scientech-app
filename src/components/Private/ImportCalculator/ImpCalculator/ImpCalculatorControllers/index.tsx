"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import Iconify from "@/src/components/Shared/Iconify";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { Dialog } from "@headlessui/react";
import { FC, useState } from "react";

const ImpCalculatorControllers: FC = () => {
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const { calculate, resetCalculator } = useImpCalculatorContext();

  const openSaveModal = () => {
    setSaveModalOpen(true);
  };

  return (
    <section className="flex items-center justify-between rounded-md border p-4">
      <h1 className="text-2xl">Calculadora de Importaciones</h1>

      <div className="flex gap-2">
        <Button type="button" icon={<Iconify icon="eva:file-outline" />} onClick={resetCalculator}>
          Nuevo
        </Button>

        <Button type="button" icon={<Iconify icon="eva:settings-2-outline" />} onClick={calculate}>
          Calcular
        </Button>

        <Button type="button" icon={<Iconify icon="eva:save-outline" />} onClick={openSaveModal}>
          Guardar
        </Button>
      </div>

      <SaveConfirmation open={saveModalOpen} setOpen={setSaveModalOpen} />
    </section>
  );
};

export default ImpCalculatorControllers;

interface SaveConfirmationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SaveConfirmation: FC<SaveConfirmationProps> = ({ open, setOpen }) => {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeModal}>
      <Dialog.Overlay />
      <Dialog.Title>Guardar calculo</Dialog.Title>
      <Dialog.Description>¿Desea guardar el calculo?</Dialog.Description>
      <Button onClick={closeModal}>Cancelar</Button>
      <Button>Guardar</Button>
    </Dialog>
  );
};
