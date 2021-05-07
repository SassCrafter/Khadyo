import React from "react";
import classes from "./Flex.module.scss";

const classNames = {
  rowReverse: classes.RowReverse,
  three: classes.RowThree,
};

function Flex({ children, className, ...restProps }) {
  return (
    <div className={`${classes.Flex} ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
}

export default Flex;

Flex.Row = function FlexRow({
  children,
  flexDirection,
  ai,
  className,
  cols,
  ...restProps
}) {
  const rowClasses = `${classes.Row} ${classNames[flexDirection] || ""} ${
    className || ""
  } ${classNames[cols] || ""} ${ai === "start" ? classes.AiStart : ""}`;
  return (
    <div className={rowClasses} {...restProps}>
      {children}
    </div>
  );
};

Flex.Column = function FlexColumn({
  children,
  className,
  alignSelf,
  ...restProps
}) {
  return (
    <div
      className={`${classes.Column} ${className || ""}`}
      {...restProps}
      style={{ alignSelf: alignSelf || "initial" }}
    >
      {children}
    </div>
  );
};
