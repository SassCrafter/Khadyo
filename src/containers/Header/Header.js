import React, { useState } from "react";
import classes from "./Header.module.scss";
import NavMobile from "./NavMobile/NavMobile";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavList from "./NavList/NavList";
import classnames from "classnames";

function Header({ windowWidth, scrolled }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const headerClasses = classnames({
		[classes.Container]: true,
		[classes.Scrolled]: scrolled,
		[classes.Open]: isMenuOpen,
	});

	const toggleMenuHandler = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<>
			<header className={headerClasses}>
				<div className="container">
					{windowWidth > 768 ? (
						<NavDesktop />
					) : (
						<NavMobile
							menuOpen={isMenuOpen}
							onToggleMenu={toggleMenuHandler}
						/>
					)}
				</div>
			</header>
			{windowWidth <= 768 && (
				<NavList
					className={`${classes.List} ${
						isMenuOpen ? classes.Open : ""
					}`}
					isOpen={isMenuOpen}
				/>
			)}
		</>
	);
}

export default Header;
