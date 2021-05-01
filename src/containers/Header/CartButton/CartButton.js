import React from "react";
import classes from "./CartButton.module.scss";
import { Link } from "react-router-dom";
import { CHECKOUT } from "../../../constants/routes";

function CartButton({ isMenuOpen }) {
	return (
		<div
			className={`${classes.Container} ${isMenuOpen ? classes.Open : ""}`}
		>
			<Link to={CHECKOUT}>
				<i className="fas fa-shopping-basket"></i>
			</Link>
			<span className={classes.Counter}>0</span>
		</div>
	);
}

export default CartButton;
