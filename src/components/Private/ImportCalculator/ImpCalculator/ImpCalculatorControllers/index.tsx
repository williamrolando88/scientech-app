"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import Iconify from "@/src/components/Shared/Iconify";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC } from "react";

const ImpCalculatorControllers: FC = () => {
  const { calculate } = useImpCalculatorContext();
  return (
    <section className="flex items-center justify-between rounded-md border p-4">
      <h1 className="text-2xl">Calculadora de Importaciones</h1>

      <div className="flex gap-2">
        <Button
          type="button"
          icon={<Iconify icon="eva:settings-2-outline" />}
          onClick={calculate}
        >
          Calcular
        </Button>

        <Button type="submit" icon={<Iconify icon="eva:save-outline" />}>
          Guardar
        </Button>
      </div>
    </section>
  );
};

export default ImpCalculatorControllers;
