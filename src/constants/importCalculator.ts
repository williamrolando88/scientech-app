import { ArticlesHeader, ImportCalculator } from "../types/calculator";

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

export const articlesHeader: ArticlesHeader[] = [
  {
    name: "quantity",
    field: "input",
    type: "number",
    title: "Cant.",
    initialValue: 1,
  },
  {
    name: "name",
    field: "input",
    type: "text",
    title: "Descripción",
    initialValue: "",
  },
  {
    name: "unitWeight",
    field: "input",
    type: "number",
    title: "Peso U.",
    initialValue: 1,
    endSymbol: "[lb]",
  },
  {
    name: "unitCost",
    field: "input",
    type: "number",
    title: "Costo U.",
    initialValue: 0,
    startSymbol: "$",
  },
  {
    name: "tariff",
    field: "input",
    type: "number",
    title: "Arancel",
    initialValue: 0,
    endSymbol: "%",
  },
  {
    name: "margin",
    field: "input",
    type: "number",
    title: "Margen",
    initialValue: 0,
    endSymbol: "%",
  },
  {
    name: "discount",
    field: "input",
    type: "number",
    title: "Descuento",
    initialValue: 0,
    endSymbol: "%",
  },
  {
    name: "unitPrice",
    field: "span",
    type: "number",
    title: "Precio U.",
    initialValue: 0,
    startSymbol: "$",
  },
];

export const lotSchema = [
  {
    title: "Costos en Origen",
    values: [
      { name: "Impuestos en origen:", value: "originTaxes", endSymbol: "%" },
      { name: "Flete en origen:", value: "originFleet", startSymbol: "$" },
    ],
  },
  {
    title: "Costos de Importación",
    values: [
      {
        name: "Costo de flete [USD/lb]:",
        value: "importFleetPerLibre",
        startSymbol: "$",
      },
      {
        name: "Trámite de importación:",
        value: "importProcedure",
        startSymbol: "$",
      },
      { name: "Agente aduanero:", value: "customsAgent", startSymbol: "$" },
    ],
  },
  {
    title: "Costos Locales",
    values: [
      { name: "Flete y movilización:", value: "localFleet", startSymbol: "$" },
      { name: "Tarifas bancarias:", value: "bankExpenses", startSymbol: "$" },
    ],
  },
];
export type LotSchema = typeof lotSchema;
