import React from "react";

const Table = ({ data }) => {
  const columns = Object.keys(data);
  const propertyNames = Object.keys(data[columns[0]]);

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
                <td key={`${column}-${property}`}>{data[column][property]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
