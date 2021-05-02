import React from "react";
import classes from "./Banner.module.scss";
import { Button } from "../../index";

function Banner({ title, subtitle, btnText, to, bg }) {
	return (
		<div className={classes.Container} style={{ backgroundImage: bg }}>
			<div className={classes.Text}>
				<h3 className={classes.Title}>{title}</h3>
				<h4 className={classes.Subtitle}>{subtitle}</h4>
			</div>
			<Button btnType="link" to={to}>
				{btnText}
			</Button>
		</div>
	);
}

export default Banner;
