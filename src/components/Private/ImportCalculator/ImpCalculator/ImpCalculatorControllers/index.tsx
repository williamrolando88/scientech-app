"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import Iconify from "@/src/components/Shared/Iconify";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC } from "react";

const ImpCalculatorControllers: FC = () => {
  const { calculate, resetCalculator, submitForm, showError } = useImpCalculatorContext();

  return (
    <>
      <section className="flex items-center justify-between rounded-md border p-4">
        <h1 className="text-2xl">Calculadora de Importaciones</h1>

        <div className="flex gap-2">
          <Button
            type="button"
            icon={<Iconify icon="eva:file-outline" />}
            onClick={resetCalculator}
          >
            Nuevo
          </Button>

          <Button
            type="button"
            icon={<Iconify icon="eva:settings-2-outline" />}
            onClick={calculate}
          >
            Calcular
          </Button>

          <Button type="button" icon={<Iconify icon="eva:save-outline" />} onClick={submitForm}>
            Guardar
          </Button>
        </div>
      </section>

      {showError && (
        <p className="text-red-500">Por favor agrega al menos un item antes de guardar </p>
      )}
    </>
  );
};

export default ImpCalculatorControllers;
