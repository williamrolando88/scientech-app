import { ReactNode, createContext, useContext } from "react";

interface Props {
  children: ReactNode;
}

const ImpCalculatorContext = createContext<Context>({} as Context);

interface Context {}

export const ImpCalculatorProvider = ({ children }: Props) => {
  const values: Context = {};
  return (
    <ImpCalculatorContext.Provider value={values}>
      {children}
    </ImpCalculatorContext.Provider>
  );
};

export const useImpCalculatorContext = () => useContext(ImpCalculatorContext);
