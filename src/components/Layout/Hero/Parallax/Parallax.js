import React from "react";
import classes from "./Parallax.module.scss";
import { Shape } from "../../../index";

function Parallax({ x, y }) {
  return (
    <div className={classes.Container}>
      <Shape
        src="/images/shapes/t-slice.png"
        alt="parallax shape"
        className={`${classes.Shape} ${classes.Slice}`}
      />
      <Shape
        src="/images/shapes/hot-pepper.png"
        alt="parallax shape"
        className={`${classes.Shape} ${classes.HotPepper}`}
      />
      <Shape
        src="/images/shapes/pepper.png"
        alt="parallax shape"
        className={`${classes.Shape} ${classes.Pepper}`}
      />
      <Shape
        src="/images/shapes/sauce.png"
        alt="parallax shape"
        className={`${classes.Shape} ${classes.Sauce}`}
      />
    </div>
  );
}

export default Parallax;
