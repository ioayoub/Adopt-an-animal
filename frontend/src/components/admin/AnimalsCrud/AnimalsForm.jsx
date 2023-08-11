import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import propTypes from "prop-types";

import GenericForm from "../../forms/GenericForm";

function AnimalsForm({ edit, resetTrigger, setResetTrigger }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");

  const backUrl = import.meta.env.VITE_BACKEND_URL;

  const animalsFields = [
    {
      label: "Name",
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      label: "Image",
      type: "text",
      value: image,
      onChange: (e) => setImage(e.target.value),
    },
    {
      label: "Description",
      type: "textarea",
      value: description,
      onChange: (e) => setDescription(e.target.value),
    },
    {
      label: "Age",
      type: "number",
      value: age,
      onChange: (e) => setAge(e.target.value),
    },
    {
      label: "Category",
      type: "select",
      value: category,
      onChange: (e) => setCategory(e.target.value),
      options: [
        {
          label: "Cats",
          value: 1,
        },
        {
          label: "Dogs",
          value: 2,
        },
        {
          label: "Horses",
          value: 3,
        },
        {
          label: "Others",
          value: 4,
        },
      ],
    },
  ];

  const onSubmit = (data) => {
    const formattedData = Object.entries(data).reduce((acc, [key, value]) => {
      acc[key.toLowerCase()] = value;
      return acc;
    }, {});
    axios
      .post(`${backUrl}/api/animals/create`, formattedData)
      .then((res) => {
        if (res.data.insertId) {
          setResetTrigger(!resetTrigger);

          return toast.success("Animal created successfully");
        }
        return toast.error("Something went wrong");
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  return (
    <div className="w-full">
      <GenericForm
        name="Animal"
        fields={animalsFields}
        onSubmit={onSubmit}
        edit={edit}
        resetTrigger={resetTrigger}
      />
    </div>
  );
}

AnimalsForm.propTypes = {
  edit: propTypes.bool,
  resetTrigger: propTypes.bool.isRequired,
  setResetTrigger: propTypes.func.isRequired,
};

AnimalsForm.defaultProps = {
  edit: false,
};

export default AnimalsForm;
