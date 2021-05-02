import React from "react";
import classes from "./FloatingShape.module.scss";

function FloatingShape({ src, alt, vertical, className }) {
	return (
		<div
			className={`${classes.Container} ${
				vertical ? classes.Vertical : ""
			} ${className || ""}`}
		>
			<img src={src} alt={alt} />
		</div>
	);
}

export default FloatingShape;
