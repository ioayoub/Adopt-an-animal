import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * A generic table component that displays data in a table format with edit and delete functionality.
 * @param {Object} props - The props object containing the following properties:
 * @param {Array} props.columns - An array of strings representing the column names.
 * @param {Array} props.data - An array of objects representing the data to be displayed.
 * @param {boolean} props.resetTrigger - A boolean value indicating whether the table should be reset.
 * @returns {JSX.Element} - A JSX element representing the generic table component.
 */

function GenericTable({ columns, data, resetTrigger }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentRowId, setCurrentRowId] = useState(null);
  const [currentInputValue, setCurrentInputValue] = useState({});
  const [notAllowedKeys] = useState(["id", "category"]);

  const currentInputRef = useRef(null);

  useEffect(() => {
    if (currentInputRef.current) {
      console.info(currentInputRef.current);
      currentInputRef.current.focus();
    }
  }, [currentInputValue]);

  const handleDelete = (row) => {
    console.info(`Deleting row with ID ${row.id}`);
  };

  const handleEditMode = (row) => {
    setIsEditMode(!isEditMode);
    setCurrentRowId(row.id);

    setCurrentInputValue({
      ...row,
    });
  };

  const handleEdit = (row) => {
    console.info(`Editing row : ${JSON.stringify(row)}`);
  };

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
                {Object.entries(row).map(([key, value]) => (
                  <td
                    key={uuidv4()}
                    className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis border-2"
                  >
                    <div className="flex items-center w-4/5">
                      {isEditMode &&
                      currentRowId === row.id &&
                      !notAllowedKeys.includes(key) ? (
                        <input
                          ref={currentInputRef}
                          className="text-sm font-medium border-2 border-gray-300 rounded-md w-16 p-2"
                          type="text"
                          value={currentInputValue[key]}
                          id={uuidv4()}
                          onChange={(e) => {
                            setCurrentInputValue((prevInputValue) => ({
                              ...prevInputValue,
                              [key]: e.target.value,
                            }));
                          }}
                        />
                      ) : (
                        <div className="text-sm font-medium text-gray-900 w-12 p-2">
                          {value}
                        </div>
                      )}
                    </div>
                  </td>
                ))}
                <td className="table-cell mx-auto">
                  {isEditMode && currentRowId === row.id ? (
                    <>
                      <button
                        className="bg-green-800 p-2 text-white"
                        type="button"
                        onClick={() => handleEdit(row)}
                      >
                        ✅
                      </button>
                      <button
                        className="bg-red-800 p-2 text-white"
                        type="button"
                        onClick={() => handleEditMode(row)}
                      >
                        ❌
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-black p-2 text-white mx-auto"
                        type="button"
                        onClick={() => handleDelete(row)}
                      >
                        🗑️
                      </button>
                      <button
                        className="bg-red-800 p-2 text-white"
                        type="button"
                        onClick={() => handleEditMode(row)}
                      >
                        ✏️
                      </button>
                    </>
                  )}
                </td>
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
