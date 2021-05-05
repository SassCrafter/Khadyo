import React from "react";
import classes from "./Tab.module.scss";
import { Card } from "../../../components";

function Tab({ id, img, title, isActive, onChangeTab }) {
  const clickHandler = () => {
    onChangeTab(id);
  };
  return (
    <Card
      className={`${classes.Container} ${isActive ? classes.Active : ""}`}
      onClick={clickHandler}
    >
      <div className={classes.Content}>
        <div className={classes.Image}>
          <img src={img} alt={title} />
        </div>
        <h3 className={classes.Title}>{title}</h3>
      </div>
    </Card>
  );
}

export default Tab;
