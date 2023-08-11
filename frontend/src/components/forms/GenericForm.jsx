import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function GenericForm({ name, fields, edit, onSubmit, resetTrigger }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset();
  }, [resetTrigger, reset]);

  return (
    <>
      <h2 className="text-2xl text-center my-12">
        {edit ? "Edit" : "Create"} {name}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 border-2 mx-auto w-fit"
      >
        {fields.map((field) => (
          <div key={field.label}>
            <label
              htmlFor={field.label}
              className="block text-gray-700 text-sm font-bold my-4"
            >
              {field.label}
              {field.type === "textarea" && (
                <div>
                  <textarea
                    id={field.label}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register(field.label, {
                      required: "This field is required",
                    })}
                    className={`bg-gray-200 appearance-none border-2 ${
                      errors[field.name] ? "border-red-500" : "border-gray-200"
                    } rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {errors[field.label] && (
                    <p className="text-red-500 text-xs italic">
                      {errors[field.label].message}
                    </p>
                  )}
                </div>
              )}

              {field.type === "select" && (
                <div>
                  <select
                    id={field.label}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register(field.label, {
                      required: "This field is required",
                    })}
                    className={`bg-gray-200 appearance-none border-2 ${
                      errors[field.name] ? "border-red-500" : "border-gray-200"
                    } rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors[field.label] && (
                    <p className="text-red-500 text-xs italic">
                      {errors[field.label].message}
                    </p>
                  )}
                </div>
              )}
              {field.type !== "textarea" && field.type !== "select" && (
                <div>
                  <input
                    id={field.label}
                    type={field.type}
                    name={field.name}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register(field.label, {
                      required: "This field is required",
                    })}
                    className={`bg-gray-200 appearance-none border-2 ${
                      errors[field.name] ? "border-red-500" : "border-gray-200"
                    } rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {errors[field.label] && (
                    <p className="text-red-500 text-xs italic">
                      {errors[field.label].message}
                    </p>
                  )}
                </div>
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

GenericForm.propTypes = {
  name: propTypes.string.isRequired,
  fields: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      value: propTypes.string,
      onChange: propTypes.func.isRequired,
    })
  ).isRequired,
  edit: propTypes.bool,
  onSubmit: propTypes.func.isRequired,
  resetTrigger: propTypes.bool.isRequired,
};

GenericForm.defaultProps = {
  edit: false,
};

export default GenericForm;
