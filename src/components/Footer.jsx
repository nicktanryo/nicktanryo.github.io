import React from "react";
import styles from "../styles/Footer.module.scss";
import { SOCIAL_GITHUB } from "./Home";

function Footer() {
	return (
		<footer className={styles.footer}>
			&copy;{" "}
			<a href={SOCIAL_GITHUB} target="_blank" rel="noreferrer">
				Nicholas Tanryo
			</a>
		</footer>
	);
}

export default Footer;
