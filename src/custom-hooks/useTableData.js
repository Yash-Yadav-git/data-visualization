import { useEffect, useMemo, useRef, useState } from "react";
import * as helperFunctions from "../utils/helperFunctions";
import * as dataMaipulation from "../utils/dataMaipulation";

/**
 * A custom React hook that calculates and memoizes table data based on input parameters.
 *
 * @param {Array} data - An array of data objects.
 * @param {string} className - The class name property to group by.
 * @param {string} propertyName - The property name for which to calculate statistics.
 * @returns {Object|null} The memoized table data containing Mean, Median, and Mode values.
 *                        Returns null if the input data is invalid.
 * @throws {Error} Throws an error if the input data is not an object.
 */
export const useTableData = (data, className, propertyName) => {
  const [tableData, setTableData] = useState(null);
  const memoizedData = useMemo(() => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid Data type");
    }
    if (propertyName === "Gamma") {
      dataMaipulation.addGama(data);
    }
    const groupedData = helperFunctions.groupDataByClassAndProperty(
      data,
      className,
      propertyName
    );
    return helperFunctions.getEvaluatedValues(groupedData);
  }, [data, className, propertyName])
    useEffect(() => {
        setTableData(memoizedData)
    }, [memoizedData])
  return tableData;
};
