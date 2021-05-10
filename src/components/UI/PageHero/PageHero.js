import React from "react";
import classes from "./PageHero.module.scss";

function PageHero({ title }) {
	return (
		<div className={classes.Container}>
			<div className={`container ${classes.Content}`}>
				<h1 className={classes.Title}>{title}</h1>
			</div>
		</div>
	);
}

export default PageHero;
