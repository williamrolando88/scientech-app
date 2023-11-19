import { ImportCalculator } from "../types/calculator";

export const IMPORT_CALCULATOR_INITIAL_VALUE: ImportCalculator = {
  items: [],
  metadata: {
    createdAt: "",
    id: "",
    updatedAt: "",
  },
  notes: [],
  settings: {
    bankExpenses: 0,
    customsAgent: 0,
    description: "",
    fleetCostPerLibre: 0,
    importProcedure: 0,
    localFleet: 0,
    originFleet: 0,
    originTaxes: 0,
  },
};
