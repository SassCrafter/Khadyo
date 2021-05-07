import React from "react";
import classes from "./Slide.module.scss";
import { BigImage, Card, Rating } from "../../../index";

function Slide({ image, name, position, rating, message }) {
  return (
    <Card className={classes.Container}>
      <div className={classes.Top}>
        <BigImage src={image} alt={name} className={classes.Image} />
        <div className={classes.Info}>
          <h4 className={classes.Title}>{name}</h4>
          <h5 className={classes.Subtitle}>{position}</h5>
          <Rating rate={rating} />
        </div>
      </div>
      <div className={classes.Bot}>
        <p className={classes.Text}>{message}</p>
      </div>
    </Card>
  );
}

export default Slide;
