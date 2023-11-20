import { z } from "zod";

export const CalculatorSettingsValidationSchema = z.object({
  bankExpenses: z.number().min(0),
  customsAgent: z.number().min(0),
  fleetCostPerLibre: z.number().min(0),
  importProcedure: z.number().min(0),
  localFleet: z.number().min(0),
  originFleet: z.number().min(0),
  originTaxes: z.number().min(0),
});

export const ItemsValidationSchema = z.object({
  discount: z.number().gte(0),
  margin: z.number().gte(0),
  name: z.string(),
  quantity: z.number().gte(0),
  tariff: z.number().gte(0),
  unitCost: z.number().gte(0),
  unitPrice: z.number(),
  unitWeight: z.number().gte(0),
});

export const NotesValidationSchema = z.object({
  body: z.string(),
});

export const ImportCalculatorValidationSchema = z.object({
  settings: CalculatorSettingsValidationSchema,
  items: ItemsValidationSchema.array(),
  notes: NotesValidationSchema.array(),
});
