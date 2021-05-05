import React from "react";
import classes from "./Panel.module.scss";
import { Card } from "../../../components";
import { Link } from "react-router-dom";
import { PRODUCT } from "../../../constants/routes";

function Panel({ id, image, title, ingredients, price, sale }) {
  return (
    <Card className={classes.Container} hover>
      <Link to={PRODUCT}>
        <div className={classes.Content}>
          <div className={classes.Image}>
            <img src={image} alt={title} />
          </div>
          <div className={classes.Description}>
            <h3 className={classes.Title}>{title}</h3>
            <p className={classes.Ingredients}>{ingredients}</p>
            <h4 className={classes.Price}>
              Price: <span className="primary-color">{price.toFixed(2)}$</span>
            </h4>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default Panel;
