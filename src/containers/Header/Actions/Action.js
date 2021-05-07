import React from "react";
import classes from "./Actions.module.scss";
import { Button, OrderBox } from "../../../components/";
import { LOGIN } from "../../../constants/routes";

function Action() {
  return (
    <div className={classes.Container}>
      <OrderBox />
      <Button btnType="link" to={LOGIN}>
        Login
      </Button>
    </div>
  );
}

export default Action;
