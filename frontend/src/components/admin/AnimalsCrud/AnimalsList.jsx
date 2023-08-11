import { useState, useEffect } from "react";
import axios from "axios";
import propTypes from "prop-types";

import GenericTable from "../../tables/GenericTable";

function AnimalsList({ resetTrigger }) {
  const columns = [
    "id",
    "name",
    "image",
    "description",
    "age",
    "isAdopted",
    "category",
  ];

  const [data, setData] = useState([]);

  const backUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backUrl}/api/animals/all`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [resetTrigger]);

  return (
    <div>
      {data && (
        <GenericTable
          columns={columns}
          data={data}
          resetTrigger={resetTrigger}
        />
      )}
    </div>
  );
}

AnimalsList.propTypes = {
  resetTrigger: propTypes.bool.isRequired,
};

export default AnimalsList;
