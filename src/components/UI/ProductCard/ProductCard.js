import React from "react";
import { Card, ProductInfo } from "../../index";
import { PRODUCT } from "../../../constants/routes";
import { Link } from "react-router-dom";
import classes from "./ProductCard.module.scss";

function ProductCard({ type = "hz", image, title, description, price }) {
  const vertical = type === "vertical";

  return (
    <Card className={classes.Container} hover>
      <Link to={PRODUCT} className={classes.Link}>
        <div
          className={`${classes.Content} ${
            (vertical && classes.ContentV) || ""
          }`}
        >
          <div className={classes.Image}>
            <img src={image} alt={title} />
          </div>
          <ProductInfo title={title} description={description} price={price} />
        </div>
      </Link>
      <button className={`${classes.Btn} ${(vertical && classes.BtnV) || ""}`}>
        <i className="fas fa-shopping-basket"></i>
      </button>
    </Card>
  );
}

export default ProductCard;
