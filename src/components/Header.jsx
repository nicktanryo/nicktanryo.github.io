import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";

function Header() {
	const [showSidebar, setShowSidebar] = useState(false);

	function handleHeaderBackground() {
		let header = document.getElementById("header");

		if (window.scrollY === 0) {
			header.style.backgroundColor = "transparent";
		} else {
			header.style.backgroundColor = "var(--global-background-color)";
		}
	}

	function toggleSidebar() {
		setShowSidebar((showSidebar) => !showSidebar);
	}

	useEffect(() => {
		handleHeaderBackground();

		window.addEventListener("scroll", handleHeaderBackground);

		return () => {
			window.removeEventListener("scroll", handleHeaderBackground);
		};
	}, []);

	return (
		<header id="header" className={styles.header}>
			<nav className={`${styles.navigation} ${showSidebar ? styles.showSidebar : ""}`}>
				<button className={styles.navbarToggle} onClick={toggleSidebar}>
					<i className="fas fa-times"></i>
				</button>
				<ul className={styles.itemList}>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="assets/NicholasTanryo.pdf" download>
							Download CV
						</a>
					</li>
				</ul>
				{/* <div className={styles.logoContainer}>
					<img src="logo512.png" />
				</div> */}
			</nav>
			<button className={styles.navbarToggle} onClick={toggleSidebar}>
				<i className="fas fa-bars"></i>
			</button>
		</header>
	);
}

export default Header;
