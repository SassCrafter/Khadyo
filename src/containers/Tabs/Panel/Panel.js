import React from "react";
import classes from "./Panel.module.scss";

function Panel({ children }) {
  return <div className={classes.Container}>{children}</div>;
}

export default Panel;
