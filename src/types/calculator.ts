import { z } from "zod";
import {
  CalculatorSettingsValidationSchema,
  ItemsValidationSchema,
  NotesValidationSchema,
} from "../lib/parsers/importCalculator";

export interface ImportCalculatorMetadata {
  createdAt: string;
  id: string;
  updatedAt: string;
  description: string;
}

export type ImportCalculatorSettings = z.infer<
  typeof CalculatorSettingsValidationSchema
>;

export type ImportCalculatorQuotedItem = z.infer<typeof ItemsValidationSchema>;

export type ImportCalculatorNote = z.infer<typeof NotesValidationSchema>;

export interface ImportCalculator {
  metadata: ImportCalculatorMetadata;
  settings: ImportCalculatorSettings;
  items: ImportCalculatorQuotedItem[];
  notes: ImportCalculatorNote[];
}

export type ArticlesHeader = {
  name: keyof ImportCalculatorQuotedItem;
  type: string;
  title: string;
  field: "input" | "span";
  startSymbol?: string;
  endSymbol?: string;
};

export type LotSchema = {
  title: string;
  values: {
    name: string;
    value: string;
    label?: string;
    endSymbol?: string;
    startSymbol?: string;
  }[];
};

export interface ItemCalculationValues extends ImportCalculatorQuotedItem {
  rowWeight: number;
  EXW: number;
  weightFraction: number;
  FOB: number;
  ISD: number;
  CIF: number;
  FODINFA: number;
  tariff: number;
}
