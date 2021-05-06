import React from "react";
import classes from "./Ingredient.module.scss";

function Ingredient({ title, ingredients, price, sale, className }) {
  return (
    <div className={`${classes.Container} ${className || ""}`}>
      <h3 className={classes.Title}>{title}</h3>
      <p className={classes.Ingredients}>{ingredients}</p>
      <h4 className={classes.Price}>
        Price:{" "}
        <span className="primary-color">{parseFloat(price).toFixed(2)}$</span>
      </h4>
    </div>
  );
}

export default Ingredient;
