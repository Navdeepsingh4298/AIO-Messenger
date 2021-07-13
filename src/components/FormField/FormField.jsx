import { ErrorMessage, Field } from "formik";

export const FormField = ({ name, label, type = "text" }) => {
  return (
    <label>
    {label}
    <Field name={name} type={type} />
    <ErrorMessage className="error" component="div" name={name} />
  </label>
  );
};