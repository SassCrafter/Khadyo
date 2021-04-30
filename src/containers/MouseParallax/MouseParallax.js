import React, { useState } from "react";
import classes from "./MouseParallax.module.scss";

function MouseParallax({ children, renderItems }) {
	const [position, setPosition] = useState([]);

	const updatePosition = (e) => {
		const top = e.clientY;
		const left = e.clientX;
		setPosition([left * 0.01, top * 0.01]);
		console.log(position);
	};

	return (
		<div className={classes.Container} onMouseMove={updatePosition}>
			{renderItems()}
			{children}
		</div>
	);
}

export default MouseParallax;
