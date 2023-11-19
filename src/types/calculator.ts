export interface ImportCalculatorMetadata {
  createdAt: string;
  id: string;
  updatedAt: string;
}

export interface ImportCalculatorSettings {
  bankExpenses: number;
  customsAgent: number;
  description: string;
  fleetCostPerLibre: number;
  importProcedure: number;
  localFleet: number;
  originFleet: number;
  originTaxes: number;
}

export interface ImportCalculatorQuotedItem {
  discount: number;
  margin: number;
  name: string;
  quantity: number;
  tariff: number;
  unitCost: number;
  unitPrice: number;
  unitWeight: number;
}

export interface ImportCalculatorNote {
  body: string;
}

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
  initialValue: number | string;
  field: "input" | "span";
  startSymbol?: string;
  endSymbol?: string;
};
