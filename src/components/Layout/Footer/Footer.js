import React from "react";
import classes from "./Footer.module.scss";
import { Section, Flex, Logo } from "../../index";
import Top from "./Top/Top";
import List from "./List/List";
import Bot from "./Bot/Bot";

function Footer() {
	return (
		<Section type="footer" className={classes.Container}>
			<Section.Container>
				<Top />
				<div className={classes.Line}></div>
				<List />
				<Bot />
			</Section.Container>
		</Section>
	);
}

export default Footer;
