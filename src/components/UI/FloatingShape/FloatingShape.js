import React, { useRef } from "react";
import classes from "./FloatingShape.module.scss";
import { floatTopBot } from "../../../helpers/animations";

function FloatingShape({ src, alt = "floating image", vertical, className }) {
  const shapeRef = useRef(null);

  floatTopBot(shapeRef.current, 4);

  return (
    <div
      className={`${classes.Container} ${vertical ? classes.Vertical : ""} ${
        className || ""
      }`}
      ref={shapeRef}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export default FloatingShape;
