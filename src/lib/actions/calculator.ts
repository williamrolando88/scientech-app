"use server";

import importCalculation from "@/src/services/firestore/importCalculator";
import { assembleImportCalculatorData } from "../modules/calculator";

export const submitTestForm = async (formData: FormData) => {
  const data = assembleImportCalculatorData(formData);

  const docId = await importCalculation.create(data);

  // eslint-disable-next-line no-console
  console.log(docId);
};
