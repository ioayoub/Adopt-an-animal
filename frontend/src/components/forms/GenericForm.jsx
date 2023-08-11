import propTypes from "prop-types";

function GenericForm({ name, fields, edit, handleSubmit }) {
  GenericForm.propTypes = {
    name: propTypes.string.isRequired,
    fields: propTypes.arrayOf(
      propTypes.shape({
        label: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
        onChange: propTypes.func.isRequired,
      })
    ).isRequired,
    edit: propTypes.bool,
    handleSubmit: propTypes.func.isRequired,
  };

  GenericForm.defaultProps = {
    edit: false,
  };

  return (
    <>
      <h2 className="text-2xl text-center my-12">
        {edit ? "Edit" : "Create"} {name}
      </h2>
      <form onSubmit={handleSubmit} className="p-8 border-2 mx-auto w-fit">
        {fields.map((field) => (
          <div key={field.label}>
            <label
              htmlFor={field.label}
              className="block text-gray-700 text-sm font-bold my-4"
            >
              {field.label}
              {field.type === "textarea" ? (
                <textarea
                  id={field.label}
                  value={field.value}
                  onChange={field.onChange}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              ) : (
                <input
                  id={field.label}
                  type={field.type}
                  value={field.value}
                  onChange={field.onChange}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              )}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="p-2 bg-blue-400 text-white rounded my-4 mx-auto block"
        >
          {edit ? "Update" : "Create"}
        </button>
      </form>
    </>
  );
}

export default GenericForm;
