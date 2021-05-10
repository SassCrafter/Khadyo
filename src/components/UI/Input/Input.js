import React from "react";
import { useField } from "formik";
import classes from "./Input.module.scss";

function Input({ label, type = "text", ...restProps }) {
  const [field, meta] = useField({ ...restProps, type });
  const inputEl =
    type === "select" ? (
      <select {...field} {...restProps} className={classes.Select} />
    ) : (
      <input type={type} {...field} {...restProps} className={classes.Input} />
    );
  return (
    <>
      {label && (
        <label
          className={classes.Label}
          htmlFor={restProps.id || restProps.name}
        >
          {label}
        </label>
      )}
      {meta.touched && meta.error ? (
        <small className={classes.Error}>{meta.error}</small>
      ) : null}
      {inputEl}
    </>
  );
}

export default Input;
