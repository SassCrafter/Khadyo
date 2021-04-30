import React from "react";
import classes from "./Shape.module.scss";

function Shape({ src, alt, className, position, ...restProps }) {
  const positionClasses = {
    topLeft: classes.TopLeft,
    topRight: classes.TopRight,
    bottomLeft: classes.BottomLeft,
    bottomRight: classes.BottomRight,
  };

  const shapeClasses = `${classes.Container} ${
    positionClasses[position] || ""
  } ${className || ""}`;

  return (
    <div className={shapeClasses} {...restProps}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Shape;
