import React from "react";
import classes from "./NavDesktop.module.scss";
import NavList from "../NavList/NavList";
import CartButton from "../CartButton/CartButton";
import Actions from "../Actions/Action";
import { Logo } from "../../../components/";

function NavDesktop() {
	return (
		<nav className={classes.Container}>
			<Logo />
			<NavList className={classes.List} />
			<CartButton />
			<Actions />
		</nav>
	);
}

export default NavDesktop;
