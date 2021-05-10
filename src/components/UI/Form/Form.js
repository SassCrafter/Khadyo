import React from "react";
import classes from "./Form.module.scss";
import { Input, Button } from "../../index";

function Form({ children, submitHandler }) {
	return (
		<form onSubmit={submitHandler} className={classes.Container}>
			{children}
		</form>
	);
}

Form.Flex = function FormFlex({ children, ...restProps }) {
	return (
		<div className={classes.Flex} {...restProps}>
			{children}
		</div>
	);
};

Form.Group = function FormGroup({ children, ...restProps }) {
	return (
		<div className={classes.Group} {...restProps}>
			{children}
		</div>
	);
};

Form.Input = function FormInput(props) {
	return <Input {...props} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default Form;
