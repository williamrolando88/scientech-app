"use client";

import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import { IMPORT_CALCULATOR_INITIAL_VALUE } from "../constants/importCalculator";
import { localStorageKey } from "../constants/keys";
import { ImportCalculator } from "../types/calculator";

interface Props {
  children: ReactNode;
}

const ImpCalculatorContext = createContext<Context>({} as Context);

interface Context {}

export const ImpCalculatorProvider = ({ children }: Props) => {
  const [calculatorInputs, _setCalculatorInputs] =
    useLocalStorage<ImportCalculator>(
      localStorageKey.importCalculator,
      IMPORT_CALCULATOR_INITIAL_VALUE,
    );

  const values: Context = { calculatorInputs };
  return (
    <ImpCalculatorContext.Provider value={values}>
      {children}
    </ImpCalculatorContext.Provider>
  );
};

export const useImpCalculatorContext = () => useContext(ImpCalculatorContext);
