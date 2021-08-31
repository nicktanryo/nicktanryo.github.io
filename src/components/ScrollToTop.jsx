import React, { useEffect } from "react";
import styles from "../styles/ScrollToTop.module.scss";

function ScrollToTop() {
	function handleVisibility() {
		let scrollToTop = document.getElementById("scroll-to-top-button");

		if (window.scrollY > Math.floor(window.innerHeight / 2)) {
			scrollToTop.style.opacity = 1;
		} else {
			scrollToTop.style.opacity = 0;
		}
	}

	useEffect(() => {
		handleVisibility();

		document.addEventListener("scroll", handleVisibility);

		return () => {
			document.removeEventListener("scroll", handleVisibility);
		};
	}, []);

	return (
		<a id="scroll-to-top-button" href="#home" className={styles.scrollToTop}>
			<i className="fas fa-chevron-up"></i>
		</a>
	);
}

export default ScrollToTop;
