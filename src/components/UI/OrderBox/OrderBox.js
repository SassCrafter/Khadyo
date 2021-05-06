import React from "react";
import classes from "./OrderBox.module.scss";
import Icon from "../../../assets/images/icons/bike-driver.png";

function OrderBox({ className, iconClass, textClass }) {
  return (
    <div className={`${classes.Container} ${className || ""}`}>
      <div className={`${classes.Icon} ${iconClass || ""}`}>
        <img src={Icon} alt="delivery number" />
      </div>
      <div className={`${classes.Text} ${textClass || ""}`}>
        <h4>Delivery Order</h4>
        <span>123-59794069</span>
      </div>
    </div>
  );
}

export default OrderBox;
