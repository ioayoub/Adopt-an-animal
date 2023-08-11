import propTypes from "prop-types";
import { useState } from "react";
import GenericForm from "../../forms/GenericForm";

function CategoriesForm({ edit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.info("Form submitted");
  };

  const categoriesFields = [
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
  ];

  return (
    <div className="w-full">
      <GenericForm
        name="Categories"
        fields={categoriesFields}
        handleSubmit={handleSubmit}
        edit={edit}
      />
    </div>
  );
}

CategoriesForm.propTypes = {
  edit: propTypes.bool.isRequired,
};

CategoriesForm.Default = {
  edit: propTypes.bool,
};

export default CategoriesForm;
