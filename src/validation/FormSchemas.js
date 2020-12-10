import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string().required("Required Field").email(),
  password: Yup.string()
    .required("Required Field")
    .min(8, "Password must have at least 8 characters"),
});
export const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Required Field"),
  email: Yup.string().required("Required Field").email(),
  password: Yup.string()
    .required("Required Field")
    .min(8, "Password must have at least 8 characters"),
  password_confirmation: Yup.string()
    .required("Required Field")
    .min(8, "Password must have at least 8 characters"),
});
export const resetSchema = Yup.object().shape({
  email: Yup.string().required("Required Field").email(),
});
