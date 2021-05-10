import * as Yup from "yup";

export const emailValidation = Yup.string()
  .email("Invalid Email Address")
  .required("Required");
