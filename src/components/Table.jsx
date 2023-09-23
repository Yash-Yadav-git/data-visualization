import React from "react";
import {
  getEvaluatedValues,
  groupDataByClassAndProperty,
} from "../utils/classWise";
import { wineData } from "../constants/wine-Data";

const Table = ({ data }) => {
  let result = getEvaluatedValues(
    groupDataByClassAndProperty(wineData, "Alcohol", "Flavanoids")
  );
  const columns = Object.keys(result);
  const propertyNames = Object.keys(result[columns[0]]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {propertyNames.map((property) => (
            <tr key={property}>
              <td>{property}</td>
              {columns.map((column) => (
                <td key={`${column}-${property}`}>{result[column][property]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
