import React from "react";
import classes from "./Title.module.scss";

function Title({ children, textAlign = "left", mw, className }) {
  return (
    <div
      className={`${classes.Container} ${mw ? classes.MW : ""}`}
      style={{ textAlign }}
    >
      {children}
    </div>
  );
}

export default Title;

Title.SmallTitle = function TitleSmallTitle({ children, ...restProps }) {
  return (
    <h3 className={classes.SmallTitle} {...restProps}>
      {children}
    </h3>
  );
};

Title.BigTitle = function TitleBigTitle({ children, ...restProps }) {
  return (
    <h2 className={classes.BigTitle} {...restProps}>
      {children}
    </h2>
  );
};

Title.LargeTitle = function TitleLargeTitle({ children, ...restProps }) {
  return (
    <h1 className={classes.LargeTitle} {...restProps}>
      {children}
    </h1>
  );
};

Title.Lead = function TitleLead({ children, ...restProps }) {
  return (
    <p className={classes.Lead} {...restProps}>
      {children}
    </p>
  );
};
