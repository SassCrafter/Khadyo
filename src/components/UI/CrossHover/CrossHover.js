import React from "react";
import classes from "./CrossHover.module.scss";

function CrossHover({ children, className }) {
	return (
		<div className={`${classes.Container} ${className}`}>{children}</div>
	);
}

export default CrossHover;
