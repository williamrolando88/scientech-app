"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
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
  removeArticle: (id: string) => void;
}

export const ImpCalculatorProvider = ({ children }: Props) => {
  const [calculatorInputs, setCalculatorInputs] =
    useLocalStorage<ImportCalculator>(
      localStorageKey.importCalculator,
      IMPORT_CALCULATOR_INITIAL_VALUE,
    );

  const addArticle = useCallback(() => {
    const article: Record<string, string | number> = {};
    articlesHeader.forEach((column) => {
      article[column.name] = column.initialValue;
    });

    article.id = Date.now().toString();

    setCalculatorInputs((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        article as unknown as ImportCalculatorQuotedItem,
      ],
    }));
  }, [setCalculatorInputs]);

  const removeArticle = useCallback(
    (id: string) => {
      setCalculatorInputs((prevState) => ({
        ...prevState,
        items: prevState.items.filter((item) => item.id !== id),
      }));
    },
    [setCalculatorInputs],
  );

  const values: Context = useMemo(
    () => ({
      calculatorInputs,
      addArticle,
      removeArticle,
    }),
    [addArticle, calculatorInputs, removeArticle],
  );
  return (
    <ImpCalculatorContext.Provider value={values}>
      {children}
    </ImpCalculatorContext.Provider>
  );
};

export const useImpCalculatorContext = () => useContext(ImpCalculatorContext);
