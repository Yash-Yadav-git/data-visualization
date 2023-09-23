import * as statistics from "./statistics";
import * as datamanipulation from "./dataMaipulation";

/**
 * Helper function to group wine data based on a specified class and property.
 *
 * @param {Array} wineData - An array of wine data objects.
 * @param {string} className - The name of the class by which data should be grouped.
 * @param {string} propertyName - The name of the property to be extracted and grouped.
 * @returns {Object} An object where keys represent class values and values are arrays of corresponding property values.
 */
export const groupDataByClassAndProperty = (
  wineData,
  className,
  propertyName
) => {
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

/**
 * Function to calculate evaluated values for grouped data.
 *
 * @param {Object} groupedData - An object containing grouped data.
 * @returns {Object} An object with calculated statistics for each group.
 */
export const getEvaluatedValues = (groupedData) => {
  let groupedValues = {};
  for (const key in groupedData) {
    groupedValues[key] = statistics.calculateAll(groupedData[key]);
  }
  return groupedValues;
};

/**
 * Function to retrieve table data based on specified parameters.
 *
 * @param {Array} data - An array of wine data objects.
 * @param {string} className - The name of the class by which data should be grouped.
 * @param {string} propertyName - The name of the property to be extracted and grouped.
 * @returns {Object} An object with evaluated values for grouped data.
 */
export const getTableData = (data, className, propertyName) => {
  console.log("get table data called");
  if (!data || typeof data !== "object") {
    throw new Error("Invalid Data type");
  }
  if (propertyName === "Gamma") {
    datamanipulation.addGama(data);
  }
  return getEvaluatedValues(
    groupDataByClassAndProperty(data, className, propertyName)
  );
};

/**
 * Function to memoize the result of a function call.
 *
 * @param {Function} fn - The function to be memoized.
 * @returns {Function} A memoized version of the input function.
 */
function memoizeFunctionCall(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      cache[key] = fn(...args);
      return cache[key];
    }
  };
}
/**
 * Memoized version of the `getTableData` function.
 *
 * @type {Function}
 */
export const memoizedGetTableData = memoizeFunctionCall(getTableData);
