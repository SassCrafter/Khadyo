import React from "react";
import classes from "./MenuIcon.module.scss";

function MenuIcon({ isOpen, onToggleMenu }) {
	return (
		<div
			className={`${classes.Container} ${isOpen ? classes.Open : ""}`}
			onClick={onToggleMenu}
		>
			{isOpen ? (
				<i className="fas fa-times"></i>
			) : (
				<i className="fas fa-bars"></i>
			)}
		</div>
	);
}

export default MenuIcon;
