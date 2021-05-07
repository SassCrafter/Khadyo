import React, { useRef } from "react";
import classes from "./FloatingShape.module.scss";
import { floatTopBot, floatLeftRight } from "../../../helpers/animations";

function FloatingShape({
  src,
  alt = "floating image",
  direction = "vertical",
  className,
  duration = 3,
  translate = 50,
}) {
  const shapeRef = useRef(null);

  direction === "horizontal"
    ? floatLeftRight(shapeRef.current, duration, translate)
    : floatTopBot(shapeRef.current, 4);

  return (
    <div className={`${classes.Container}  ${className || ""}`} ref={shapeRef}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default FloatingShape;
