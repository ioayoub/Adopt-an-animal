import propTypes from "prop-types";
import { useState } from "react";
import GenericForm from "../../forms/GenericForm";

function AnimalsForm({ edit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log("Form submitted");
  };

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
  ];

  return (
    <div className="w-full">
      <GenericForm
        name="Animal"
        fields={animalsFields}
        handleSubmit={handleSubmit}
        edit={edit}
      />
    </div>
  );
}

AnimalsForm.propTypes = {
  edit: propTypes.bool.isRequired,
};

AnimalsForm.Default = {
  edit: false,
};

export default AnimalsForm;
