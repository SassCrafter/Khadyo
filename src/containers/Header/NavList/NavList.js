import React from "react";
import classes from "./NavList.module.scss";
import { Link } from "react-router-dom";
import * as Routes from "../../../constants/routes";

function NavList({ className }) {
	return (
		<ul className={`${classes.List || ""} ${className || ""}`}>
			<li>
				<Link className={classes.Link} to={Routes.HOME}>
					Home
				</Link>
			</li>
			<li>
				<Link className={classes.Link} to={Routes.ABOUT}>
					About
				</Link>
			</li>
			<li>
				<Link className={classes.Link} to={Routes.MENU}>
					Menu
				</Link>
			</li>
			<li>
				<Link className={classes.Link} to={Routes.BURGER_BUILDER}>
					Burger Builder
				</Link>
			</li>
			<li>
				<Link className={classes.Link} to={Routes.CONTACT}>
					Contact
				</Link>
			</li>
		</ul>
	);
}

export default NavList;
