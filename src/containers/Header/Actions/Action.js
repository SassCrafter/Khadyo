import React from "react";
import classes from "./Actions.module.scss";
import { Button } from "../../../components/";
import Icon from "../../../assets/images/icons/bike-driver.png";
import { LOGIN } from "../../../constants/routes";

function Action() {
	return (
		<div className={classes.Container}>
			<div className={classes.Icon}>
				<img src={Icon} alt="delivery number" />
			</div>
			<div className={classes.Text}>
				<h4>Delivery Order</h4>
				<span>123-59794069</span>
			</div>
			<Button btnType="link" to={LOGIN}>
				Login
			</Button>
		</div>
	);
}

export default Action;
