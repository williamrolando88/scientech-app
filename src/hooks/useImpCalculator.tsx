"use client";

import { FormikErrors, FormikTouched, useFormik } from "formik";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import { toFormikValidationSchema } from "zod-formik-adapter";
import {
  IMPORT_CALCULATOR_INITIAL_VALUE,
  IMPORT_CALCULATOR_NEW_ROW,
} from "../constants/importCalculator";
import { localStorageKey } from "../constants/keys";
import { ImportCalculatorValidationSchema } from "../lib/parsers/importCalculator";
import { ImportCalculator } from "../types/calculator";

interface Props {
  children: ReactNode;
  fetchedValues?: ImportCalculator;
}
interface Context {
  values: ImportCalculator;
  errors: FormikErrors<ImportCalculator>;
  touched: FormikTouched<ImportCalculator>;
  handleChange: (_e: React.ChangeEvent<unknown>) => void;
  resetForm: VoidFunction;
  addRow: VoidFunction;
  deleteRow: (_id: number) => void;
  addNote: (_body: string) => void;
  deleteNote: (_id: number) => void;
  setFieldValue: (
    _field: string,
    _value: string | number,
  ) => Promise<void> | Promise<FormikErrors<ImportCalculator>>;
}

const ImpCalculatorContext = createContext<Context>({} as Context);

export const ImpCalculatorProvider = ({ children, fetchedValues }: Props) => {
  const [calculatorInputs, setCalculatorInputs] =
    useLocalStorage<ImportCalculator>(
      localStorageKey.importCalculator,
      IMPORT_CALCULATOR_INITIAL_VALUE,
    );

  const {
    values,
    errors,
    touched,
    handleChange,
    resetForm,
    setValues,
    setFieldValue,
  } = useFormik<ImportCalculator>({
    initialValues: calculatorInputs || IMPORT_CALCULATOR_INITIAL_VALUE,
    onSubmit: () => alert("submit"),
    validationSchema: toFormikValidationSchema(
      ImportCalculatorValidationSchema,
    ),
  });

  const addRow = useCallback(() => {
    setValues((prevState) => ({
      ...prevState,
      items: [...prevState.items, IMPORT_CALCULATOR_NEW_ROW],
    }));
  }, [setValues]);

  const deleteRow = useCallback(
    (id: number) => {
      setValues((prevState) => ({
        ...prevState,
        items: prevState.items.filter((_, index) => index !== id),
      }));
    },
    [setValues],
  );

  const addNote = useCallback(
    (body: string) => {
      setValues((prevState) => ({
        ...prevState,
        notes: [...prevState.notes, { body }],
      }));
    },
    [setValues],
  );

  const deleteNote = useCallback(
    (id: number) => {
      setValues((prevState) => ({
        ...prevState,
        notes: prevState.notes.filter((_, index) => index !== id),
      }));
    },
    [setValues],
  );

  const resetCalculator = useCallback(() => {
    setCalculatorInputs(IMPORT_CALCULATOR_INITIAL_VALUE);
    resetForm({ values: IMPORT_CALCULATOR_INITIAL_VALUE });
  }, [resetForm, setCalculatorInputs]);

  useEffect(() => {
    setCalculatorInputs(values);
  }, [setCalculatorInputs, values]);

  useEffect(() => {
    if (fetchedValues) {
      setCalculatorInputs(fetchedValues);
      setValues(fetchedValues);
    }
  }, [fetchedValues, setCalculatorInputs, setValues]);

  const contextValues: Context = useMemo(
    () => ({
      values,
      addRow,
      deleteRow,
      resetCalculator,
      addNote,
      deleteNote,
      errors,
      handleChange,
      resetForm,
      setFieldValue,
      touched,
    }),
    [
      addNote,
      addRow,
      deleteNote,
      deleteRow,
      errors,
      handleChange,
      resetCalculator,
      resetForm,
      setFieldValue,
      touched,
      values,
    ],
  );
  return (
    <ImpCalculatorContext.Provider value={contextValues}>
      {children}
    </ImpCalculatorContext.Provider>
  );
};

export const useImpCalculatorContext = () => useContext(ImpCalculatorContext);
