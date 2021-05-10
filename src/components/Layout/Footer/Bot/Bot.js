import React from "react";
import { Logo } from "../../../index";
import classes from "./Bot.module.scss";
import NavList from "../../../../containers/Header/NavList/NavList";

function Bot() {
	return (
		<div className={classes.Container}>
			<Logo size="big" />
			<NavList className={classes.List} />
		</div>
	);
}

export default Bot;
