"use server";

import { APP_ROUTES } from "@/src/routes/appRoutes";
import importCalculation from "@/src/services/firestore/importCalculator";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { assembleImportCalculatorData } from "../modules/calculator";

export const storeCalculation = async (formData: FormData) => {
  const data = assembleImportCalculatorData(formData);

  const docId = await importCalculation.create(data);

  if (!docId) return;

  revalidatePath(APP_ROUTES.private.calculator.index);
  redirect(APP_ROUTES.private.calculator.index);
};
