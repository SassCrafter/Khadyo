import React from "react";
import classes from "./Banner.module.scss";
import { Button, CrossHover } from "../../index";

function Banner({ children, title, subtitle, btnText, to, bg, className }) {
	console.log(bg);
	return (
		<CrossHover className={`${classes.Container} ${className || ""}`}>
			<div className={classes.Content}>
				<div className={classes.Text}>
					<h3 className={classes.Title}>{title}</h3>
					<h4 className={classes.Subtitle}>{subtitle}</h4>
				</div>
				<Button btnType="link" to={to} className={classes.Btn}>
					{btnText}
				</Button>
			</div>
			{children}
		</CrossHover>
	);
}

export default Banner;
