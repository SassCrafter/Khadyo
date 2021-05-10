import React from "react";
import classes from "./Item.module.scss";

function Item({ children, className }) {
	return (
		<div className={`${classes.Container} ${className || ""}`}>
			{children}
		</div>
	);
}

export default Item;

Item.Group = function ItemGroup({ children, ...restProps }) {
	return (
		<div className={classes.Group} {...restProps}>
			{children}
		</div>
	);
};

Item.Title = function ItemTitle({ children, ...restProps }) {
	return (
		<h4 className={classes.Title} {...restProps}>
			{children}
		</h4>
	);
};

Item.Text = function ItemText({ children, ...restProps }) {
	return (
		<p className={classes.Text} {...restProps}>
			{children}
		</p>
	);
};
