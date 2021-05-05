import React from "react";
import classes from "./Card.module.scss";

function Card({ children, className, hover, onClick }) {
  return (
    <div
      className={`${classes.Container} ${hover ? classes.Hover : ""} ${
        className || ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
