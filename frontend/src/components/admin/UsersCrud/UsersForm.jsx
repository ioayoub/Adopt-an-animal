import propTypes from "prop-types";
import { useState } from "react";

import GenericForm from "../../forms/GenericForm";

function UsersForm({ edit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.info("Form submitted", e);
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
        onSubmit={onSubmit}
        edit={edit}
      />
    </div>
  );
}

UsersForm.propTypes = {
  edit: propTypes.bool,
};

UsersForm.defaultProps = {
  edit: false,
};

export default UsersForm;
