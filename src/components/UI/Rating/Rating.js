import React from "react";
import classes from "./Rating.module.scss";

function Rating({ rate }) {
  const listItems = [1, 2, 3, 4, 5].map((item) => (
    <li className={classes.Item} key={item}>
      {rate >= item ? (
        <i className="fas fa-star"></i>
      ) : (
        <i className="far fa-star"></i>
      )}
    </li>
  ));
  return <ul className={classes.List}>{listItems}</ul>;
}

export default Rating;
