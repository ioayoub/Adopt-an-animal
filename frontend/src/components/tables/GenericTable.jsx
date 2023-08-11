import React from "react";
import propTypes from "prop-types";

function GenericTable({ columns, data }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.name}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.name}>
              {columns.map((column) => (
                <td key={column.name} className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

GenericTable.propTypes = {
  columns: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
    })
  ).isRequired,
  data: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default GenericTable;
