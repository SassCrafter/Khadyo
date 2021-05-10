import React from "react";
import classNames from "classnames";
import classes from "./Button.module.scss";
import { Link } from "react-router-dom";

function Button({
  children,
  btnType = "btn",
  to,
  className,
  fullWidth,
  btnStyle,
  clickHandler,
  ...restProps
}) {
  const btnClass = classNames(
    classes.Btn,
    className,
    classes[`btn-${btnStyle}` || ""],
    fullWidth ? classes["FullWidth"] : ""
  );
  return btnType === "link" ? (
    <Link className={btnClass} to={to}>
      {children}
    </Link>
  ) : (
    <button className={btnClass} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
