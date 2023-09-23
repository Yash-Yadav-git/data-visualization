import * as statistics from "./statistics";
import * as datamanipulation from './dataMaipulation'

const groupDataByClassAndProperty = (wineData, className, propertyName) => {
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

const getEvaluatedValues = (groupedData) => {
  let groupedValues = {};
  for (const key in groupedData) {
    groupedValues[key] = {
      Mean: Number(statistics.getMean(groupedData[key])).toFixed(3),
      Median: Number(statistics.getMedian(groupedData[key])).toFixed(3),
      Mode: Number(statistics.getMode(groupedData[key])).toFixed(3),
    };
  }
  return groupedValues;
};

export const getRequestedValue = (data, className, propertyName) => {
  if (
    data.length === 0 ||
    typeof data === undefined ||
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
