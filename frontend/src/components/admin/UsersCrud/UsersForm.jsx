import propTypes from "prop-types";
import { useState } from "react";
import GenericForm from "../../forms/GenericForm";

function UsersForm({ edit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.info("Form submitted");
  };

  const animalsFields = [
    {
      label: "Firstname",
      type: "text",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
    },
    {
      label: "Lastname",
      type: "text",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
    },
    {
      label: "Email",
      type: "text",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: "Password",
      type: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <div className="w-full">
      <GenericForm
        name="Users"
        fields={animalsFields}
        handleSubmit={handleSubmit}
        edit={edit}
      />
    </div>
  );
}

UsersForm.propTypes = {
  edit: propTypes.bool.isRequired,
};

UsersForm.Default = {
  edit: propTypes.bool,
};

export default UsersForm;
