import * as Yup from "yup";

export const defaultValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string().required("Required").min(8, "Must be at least 8 characters"),
});