import React from "react";
import propTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function GenericTable({ columns, data, resetTrigger }) {
  return (
    <div className="my-16 w-full overflow-x-auto">
      <span className="hidden">{resetTrigger && "updated"}</span>
      <h2 className="text-2xl text-center font-bold">Animals list</h2>
      <table className=" divide-y divide-gray-200 my-12 lg:mx-auto whitespace-nowrap">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={uuidv4()}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length ? (
            data.map((row) => (
              <tr key={row.id}>
                {Object.values(row).map((cell) => (
                  <td
                    key={uuidv4()}
                    className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis border-2"
                  >
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {cell}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 whitespace-nowrap"
              >
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900 mx-auto">
                    No data
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

GenericTable.propTypes = {
  columns: propTypes.arrayOf(propTypes.string).isRequired,
  data: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      age: propTypes.number.isRequired,
      isAdopted: propTypes.bool,
    })
  ),
  resetTrigger: propTypes.bool.isRequired,
};

GenericTable.defaultProps = {
  data: [
    {
      name: "Pepito",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      age: 2,
      isAdopted: false,
    },
  ],
};

export default GenericTable;
