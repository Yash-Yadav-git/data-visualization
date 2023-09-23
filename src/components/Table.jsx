import React from "react";
import "./Table.css";
/**
 * Table Component
 *
 * A functional component for rendering a table based on the provided data.
 *
 * @param {object} data - The data to display in the table.
 * @param {string} groupedClass - The property on which the data is grouped are performed
 * @param {string} groupedProperty - The property on which operations are performed
 */
const Table = ({ data, groupedClass, groupedProperty }) => {
  /**
   * Extract column and property names from the data.
   * - columns: An array of column names.
   * - propertyNames: An array of property names.
   */
  const columns = Object.keys(data);
  const propertyNames = Object.keys(data[columns[0]]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {columns.map((column) => (
              <th key={column}>{ groupedClass} {column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {propertyNames.map((property) => (
            <tr key={property}>
              <td>
                {groupedProperty} {property}
              </td>
              {columns.map((column) => (
                <td key={`${column}-${property}`}>{data[column][property]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

/**
 * Memoize the Table component using React.memo to prevent unnecessary re-renders.
 */
export default React.memo(Table);
