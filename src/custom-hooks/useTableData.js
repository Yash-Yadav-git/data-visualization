import { useEffect, useState } from "react";
import * as helperFunctions from "../utils/helperFunctions";
import * as dataMaipulation from "../utils/dataMaipulation";

export const useTbaleData = (data, className, propertyName) => {
  const [tabeData, setTableData] = useState(null);

  useEffect(() => {
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
    const evaluatedValues = helperFunctions.getEvaluatedValues(groupedData);
    setTableData(evaluatedValues);
  }, [data, className, propertyName]);
  return tabeData;
};
