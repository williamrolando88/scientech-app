"use client";

import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  IMPORT_CALCULATOR_INITIAL_VALUE,
  articlesHeader,
} from "../constants/importCalculator";
import { localStorageKey } from "../constants/keys";
import {
  ImportCalculator,
  ImportCalculatorQuotedItem,
} from "../types/calculator";

interface Props {
  children: ReactNode;
}

const ImpCalculatorContext = createContext<Context>({} as Context);

interface Context {
  calculatorInputs: ImportCalculator;
  addArticle: VoidFunction;
}

export const ImpCalculatorProvider = ({ children }: Props) => {
  const [calculatorInputs, setCalculatorInputs] =
    useLocalStorage<ImportCalculator>(
      localStorageKey.importCalculator,
      IMPORT_CALCULATOR_INITIAL_VALUE,
    );

  const addArticle = () => {
    // eslint-disable-next-line no-console
    console.log("first");

    const newArticle = articlesHeader.map((column) => ({
      [column.name]: column.initialValue,
    })) as unknown as ImportCalculatorQuotedItem;

    // eslint-disable-next-line no-console
    console.log(newArticle);
    setCalculatorInputs((prevState) => ({
      ...prevState,
      items: [...prevState.items, newArticle],
    }));
  };

  const values: Context = { calculatorInputs, addArticle };
  return (
    <ImpCalculatorContext.Provider value={values}>
      {children}
    </ImpCalculatorContext.Provider>
  );
};

export const useImpCalculatorContext = () => useContext(ImpCalculatorContext);
