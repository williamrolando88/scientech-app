import { ImportCalculator, LotSchema } from "@/src/types/calculator";

export const loadLotData = (
  schema: LotSchema[],
  calculatorData: ImportCalculator,
): LotSchema[] =>
  schema.map((section) => ({
    title: section.title,
    values: section.values.map((field) => ({
      label: field.name,
      name: field.value,
      // @ts-ignore
      value: calculatorData.settings[field.value],
      startSymbol: field.startSymbol,
      endSymbol: field.endSymbol,
    })),
  }));
