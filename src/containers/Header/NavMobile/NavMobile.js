import React from "react";
import classes from "./NavMobile.module.scss";
import MenuIcon from "../MenuIcon/MenuIcon";
import CartButton from "../CartButton/CartButton";
import { Logo } from "../../../components/";

function NavMobile({ menuOpen, onToggleMenu }) {
	return (
		<nav className={`${classes.Container} ${menuOpen ? classes.Open : ""}`}>
			<Logo />
			<div className={classes.Right}>
				<CartButton isMenuOpen={menuOpen} />
				<MenuIcon isOpen={menuOpen} onToggleMenu={onToggleMenu} />
			</div>
		</nav>
	);
}

export default NavMobile;
