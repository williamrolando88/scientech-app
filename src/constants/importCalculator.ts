import {
  ArticlesHeader,
  ImportCalculator,
  ImportCalculatorQuotedItem,
  LotSchema,
} from "../types/calculator";

export const IMPORT_CALCULATOR_NEW_ROW: ImportCalculatorQuotedItem = {
  discount: 0,
  margin: 0,
  name: "",
  quantity: 1,
  tariff: 0,
  unitCost: 0,
  unitPrice: 0,
  unitWeight: 1,
};

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

export const ITEMS_STRUCTURE: ArticlesHeader[] = [
  {
    name: "quantity",
    field: "input",
    type: "number",
    title: "Cant.",
  },
  {
    name: "name",
    field: "input",
    type: "text",
    title: "Descripción",
  },
  {
    name: "unitWeight",
    field: "input",
    type: "number",
    title: "Peso U.",
    endSymbol: "[lb]",
  },
  {
    name: "unitCost",
    field: "input",
    type: "number",
    title: "Costo U.",
    startSymbol: "$",
  },
  {
    name: "tariff",
    field: "input",
    type: "number",
    title: "Arancel",
    endSymbol: "%",
  },
  {
    name: "margin",
    field: "input",
    type: "number",
    title: "Margen",
    endSymbol: "%",
  },
  {
    name: "discount",
    field: "input",
    type: "number",
    title: "Descuento",
    endSymbol: "%",
  },
  {
    name: "unitPrice",
    field: "span",
    type: "number",
    title: "Precio U.",
    startSymbol: "$",
  },
];

export const SETTINGS_STRUCTURE: LotSchema[] = [
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
