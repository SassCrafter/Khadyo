import React from "react";
import classes from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { HOME } from "../../../constants/routes";
import LogoImg from "../../../assets/images/logo.png";

function Logo({ size }) {
	return (
		<div
			className={`${classes.Container} ${
				size === "big" ? classes.Big : ""
			}`}
		>
			<Link to={HOME} className={classes.Link}>
				<img src={LogoImg} alt="Khadyo Home" />
			</Link>
		</div>
	);
}

export default Logo;
