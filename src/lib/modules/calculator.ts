import {
  ImportCalculator,
  ItemCalculationValues,
  LotSchema,
} from "@/src/types/calculator";
import { round } from "mathjs";
import { parseSafeNumber } from "../utils/numbers";

export const calculateImportation = (inputs: ImportCalculator) => {
  // todo: store these values on the server
  const ISDTax = 0.04;
  const fodinfaTax = 0.005;
  const insuranceRate = 0.01;

  const {
    items,
    settings: {
      bankExpenses,
      fleetCostPerLibre,
      importProcedure,
      localFleet,
      originFleet,
      originTaxes,
    },
  } = inputs;

  const articles: ItemCalculationValues[] = items.map((article) => ({
    quantity: parseSafeNumber(article.quantity),
    unitWeight: parseSafeNumber(article.unitWeight),
    unitCost: parseSafeNumber(article.unitCost),
    tariff: parseSafeNumber(article.tariff),
    margin: parseSafeNumber(article.margin),
    unitPrice: parseSafeNumber(article.unitPrice),
    CIF: 0,
    EXW: 0,
    FOB: 0,
    FODINFA: 0,
    ISD: 0,
    name: article.name,
    rowWeight: 0,
    weightFraction: 0,
  }));

  const bankExpensesSafe = parseSafeNumber(bankExpenses);
  const importFleetPerLibreSafe = parseSafeNumber(fleetCostPerLibre);
  const importProcedureSafe = parseSafeNumber(importProcedure);
  const localFleetSafe = parseSafeNumber(localFleet);
  const originFleetSafe = parseSafeNumber(originFleet);
  const originTaxesSafe = parseSafeNumber(originTaxes);

  let totalWeight = 0;
  let totalFOB = 0;

  articles.forEach((row) => {
    row.rowWeight = row.quantity * row.unitWeight;

    const EXW = (row.quantity * row.unitCost * (100 + originTaxesSafe)) / 100;
    row.EXW = parseSafeNumber(EXW);

    if (row.EXW > 0) {
      totalWeight += row.rowWeight;
    }
  });

  // Calculate aux lot variables
  const internationalFleet = totalWeight * importFleetPerLibreSafe;
  const baseCourier = importProcedureSafe + internationalFleet;

  articles.forEach((row) => {
    row.weightFraction =
      row.EXW > 0 && totalWeight > 0 ? row.rowWeight / totalWeight : 0;

    // Calculate aux FOB item values
    row.FOB = originFleetSafe * row.weightFraction + row.EXW;
    row.ISD = row.FOB * ISDTax;

    // Calculate aux CIF item values
    row.CIF =
      (row.FOB + internationalFleet * row.weightFraction) * (1 + insuranceRate);
    row.FODINFA = row.CIF * fodinfaTax;
    row.tariff = (row.CIF * row.tariff) / 100;

    // Asign values to lot variables
    totalFOB += row.FOB;
  });

  articles.forEach((row) => {
    const FOBFraction = row.FOB / totalFOB;
    const originCosts =
      totalFOB > 0 ? row.FOB + bankExpensesSafe * FOBFraction : 0;
    const itemTaxes = row.ISD + row.FODINFA + row.tariff;
    const importCost = baseCourier * row.weightFraction;
    const localFleetCost = localFleetSafe * row.weightFraction;

    const itemCost = originCosts + itemTaxes + importCost + localFleetCost;
    const profit =
      row.margin < 100
        ? itemCost / (1 - row.margin / 100) - itemCost
        : (itemCost * row.margin) / 100;
    const rowPrice = profit + itemCost;

    row.unitPrice = row.quantity > 0 ? round(rowPrice / row.quantity, 2) : 0;
  });

  const calculatorInputs: ImportCalculator = {
    ...inputs,
    items: items.map((item, index) => ({
      ...item,
      unitPrice: articles[index].unitPrice,
    })),
  };

  return {
    pricesArray: articles.map((article) => article.unitPrice),
    calculatorInputs,
    articlesReport: articles,
  };
};

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
