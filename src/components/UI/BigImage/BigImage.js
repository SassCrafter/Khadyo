import React from "react";
import classes from "./BigImage.module.scss";

function BigImage({ children, style, className, src, alt, ...restProps }) {
  return (
    <div className={`${classes.Container} ${className}`} style={style}>
      <img src={src} alt={alt} {...restProps} />
      {children}
    </div>
  );
}

export default BigImage;
