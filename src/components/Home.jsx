import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";

import KUTE from "kute.js";

export const SOCIAL_GITHUB = "https://github.com/nicktanryo";
const SOCIAL_LINKEDIN = "https://www.linkedin.com/in/nicholas-tanryo-bb6b5219a/";
const SOCIAL_FACEBOOK = "https://www.facebook.com/nicktanryo/";

function Home() {
	useEffect(() => {
		KUTE.fromTo("#blob1", { path: "#blob1" }, { path: "#blob2" }, { repeat: Infinity, duration: 1400, yoyo: true }).start();
		KUTE.fromTo("#blob3", { path: "#blob3" }, { path: "#blob4" }, { repeat: Infinity, duration: 1400, yoyo: true }).start();
		KUTE.fromTo("#blob5", { path: "#blob5" }, { path: "#blob6" }, { repeat: Infinity, duration: 1400, yoyo: true }).start();
	}, []);

	return (
		<section id="home" className={styles.homeSection}>
			<div className={styles.homeContainer}>
				<h1 className={styles.name}>Nicholas Tanryo</h1>

				<div className={styles.socialsContainer}>
					<div className={styles.halfHR}></div>
					<div className={styles.socials}>
						<a href={SOCIAL_GITHUB} className={styles.social} target="_blank" rel="noreferrer">
							<i className={`fab fa-github-square ${styles.fontAwesome}`}></i>
						</a>
						<a href={SOCIAL_LINKEDIN} className={styles.social} target="_blank" rel="noreferrer">
							<i className={`fab fa-linkedin ${styles.fontAwesome}`}></i>
						</a>
						<a href={SOCIAL_FACEBOOK} className={styles.social} target="_blank" rel="noreferrer">
							<i className={`fab fa-facebook-messenger ${styles.fontAwesome}`}></i>
						</a>
					</div>
					<div className={styles.halfHR}></div>
				</div>
			</div>
			<svg
				className={`${styles.blob} ${styles.blob1}`}
				id="visual"
				viewBox="0 0 960 600"
				width="60vh"
				height="60vh"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<g transform="translate(423.65718775797166 340.0711483663422)">
					<path
						id="blob1"
						d="M137.1 -130.1C169.1 -105.1 180.6 -52.6 174.7 -5.9C168.8 40.8 145.6 81.6 113.6 124.4C81.6 167.2 40.8 212.1 -10.1 222.2C-61 232.4 -122.1 207.8 -156.6 164.9C-191.1 122.1 -199 61 -203.9 -4.8C-208.7 -70.7 -210.4 -141.4 -175.9 -166.4C-141.4 -191.4 -70.7 -170.7 -9.1 -161.6C52.6 -152.6 105.1 -155.1 137.1 -130.1"
					></path>
				</g>
				<g transform="translate(465.1518657181617 276.90746260278365)" style={{ visibility: "hidden" }}>
					<path
						id="blob2"
						d="M182 -179C232 -132 266 -66 262.9 -3.1C259.9 59.9 219.7 119.7 169.7 144.7C119.7 169.7 59.9 159.9 -4.4 164.2C-68.6 168.6 -137.2 187.2 -172.7 162.2C-208.2 137.2 -210.6 68.6 -210.4 0.2C-210.1 -68.1 -207.2 -136.2 -171.7 -183.2C-136.2 -230.2 -68.1 -256.1 -1.1 -255.1C66 -254 132 -226 182 -179"
					></path>
				</g>
			</svg>

			<svg
				className={`${styles.blob} ${styles.blob2}`}
				id="visual"
				viewBox="0 0 960 540"
				width="50%"
				height="50%"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<g transform="translate(450.7256843113689 283.4942824330989)">
					<path
						id="blob3"
						d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
					></path>
				</g>
				<g transform="translate(509.54377535978017 281.49390864595887)" style={{ visibility: "hidden" }}>
					<path
						id="blob4"
						d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
					></path>
				</g>
			</svg>

			<svg
				className={`${styles.blob} ${styles.blob3}`}
				id="visual"
				viewBox="0 0 960 540"
				width="40vh"
				height="40vh"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<g transform="translate(421.8040826431377 305.2453477795785)">
					<path
						id="blob5"
						d="M164.5 -219.9C211.4 -192.3 246.5 -141.9 240.8 -93.7C235.2 -45.5 188.9 0.4 166.7 49.6C144.5 98.9 146.3 151.4 122.5 186.1C98.7 220.9 49.4 238 2 235.3C-45.5 232.6 -90.9 210.1 -115.8 175.7C-140.7 141.3 -145 94.9 -157.1 52.3C-169.3 9.7 -189.3 -29.2 -184.2 -64.5C-179.1 -99.8 -148.9 -131.6 -114 -163.1C-79.2 -194.6 -39.6 -225.8 9.6 -239C58.8 -252.2 117.6 -247.5 164.5 -219.9"
					></path>
				</g>
				<g transform="translate(509.54377535978017 281.49390864595887)" style={{ visibility: "hidden" }}>
					<path
						id="blob6"
						d="M135.8 -172.1C183 -152.6 233.2 -122.3 238 -83.1C242.8 -43.9 202.3 4.3 182.6 57.6C162.8 110.8 164 169.1 137.1 205.6C110.1 242.2 55.1 257.1 12.8 239.4C-29.4 221.8 -58.8 171.6 -98.7 139.2C-138.7 106.9 -189.2 92.4 -222 56.7C-254.9 21 -270.1 -35.8 -249.2 -75C-228.2 -114.1 -171.1 -135.5 -123.6 -154.9C-76 -174.3 -38 -191.6 3.1 -196C44.3 -200.3 88.6 -191.6 135.8 -172.1"
					></path>
				</g>
			</svg>
		</section>
	);
}

export default Home;
