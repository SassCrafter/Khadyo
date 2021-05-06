import React from "react";
import classes from "./Offer.module.scss";
import { Button } from "../../index";

function Offer({ title, price }) {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>{title}</h3>
      <h4 className={classes.Price}>{price}</h4>
    </div>
  );
}

export default Offer;
