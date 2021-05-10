import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Signup, Login } from "./pages/";
import { Header } from "./containers/";
import { Footer } from "./components/";
import * as Routes from "./constants/routes";
import { getWindowWidth } from "./helpers/utils";

function App() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [scrolled, setScrolled] = useState(false);

	const updateWindowWidth = () => {
		setWindowWidth(getWindowWidth);
	};

	const updateScrolled = () => {
		if (window.scrollY > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		updateWindowWidth();

		window.addEventListener("resize", updateWindowWidth);
		window.addEventListener("scroll", updateScrolled);

		return () => {
			window.removeEventListener("resize", updateWindowWidth);
			window.removeEventListener("scroll", updateScrolled);
		};
	}, []);

	return (
		<Router>
			<Header windowWidth={windowWidth} scrolled={scrolled} />
			<Switch>
				<Route exact path={Routes.HOME}>
					<Home />
				</Route>
				<Route exact path={Routes.SIGN_UP}>
					<Signup />
				</Route>
				<Route exact path={Routes.LOGIN}>
					<Login />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
