import * as statistics from "./statistics";
import * as datamanipulation from "./dataMaipulation";

export const groupDataByClassAndProperty = (wineData, className, propertyName) => {
  let returnObject = {};
  wineData.forEach((item) => {
    if (returnObject[item[className]]) {
      returnObject[item[className]] = [
        ...returnObject[item[className]],
        item[propertyName],
      ];
    } else {
      returnObject[item[className]] = [item[propertyName]];
    }
  });
  return returnObject;
};

export const getEvaluatedValues = (groupedData) => {
  let groupedValues = {};
  for (const key in groupedData) {
    groupedValues[key] = statistics.calculateAll(groupedData[key]);
  }
  return groupedValues;
};

export const getTableData = (data, className, propertyName) => {
  if (
    !data ||
    typeof data !== "object"
  ) {
    throw new Error("Invalid Data type");
  }
  if (propertyName === "Gamma") {
    datamanipulation.addGama(data);
  }
  return getEvaluatedValues(
    groupDataByClassAndProperty(data, className, propertyName)
  );
};

export const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0) return true
  return false
}
