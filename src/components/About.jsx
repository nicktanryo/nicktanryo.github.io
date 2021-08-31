import React from "react";
import styles from "../styles/About.module.scss";

function About() {
	return (
		<section id="about" className={styles.about}>
			<h3>About Me</h3>

			<div className={`${styles.education} ${styles.subContainer}`}>
				<h2 className={styles.categoryName}>Education</h2>
				<div className={styles.educationContainer}>
					<CardItem
						logo="cuhk.jpg"
						title="The Chinese University of Hong Kong"
						subtitle="Computer Science"
						tags={[
							"Building Web Application",
							"Software Engineering",
							"Database System",
							"Design and Analysis of Algorithm",
							"Principle of Programming Language",
							"Machine Learning",
						]}
					>
						<h6>Awards:</h6>
						<ul>
							<li>CUHK University Admission Full Scholarship</li>
							<li>Faculty of Engineering Admission Scholarship</li>
							<li>CUHK Honours at Entrance</li>
							<li>Chung Chi College In Class Scholarship</li>
						</ul>
					</CardItem>
				</div>
			</div>
			<div className={`${styles.technicalSkills} ${styles.subContainer}`}>
				<h2 className={styles.categoryName}>Technical Skills</h2>
				<div className={styles.technicalSkillsContainer}>
					<CardItem logo="frontend-logo.svg" title="Frontend Development" tags={["HTML", "CSS", "JavaScript"]}>
						Able to use Markup language to build web pages and with the help of stylesheet and JavaScript to make websites more interactive.
					</CardItem>
					<CardItem logo="javascript-framework-logo.png" title="JavaScript Frameworks" tags={["React", "TypeScript", "Material UI"]}>
						Using JavaScript library and TypeScript to create more complicated pages that require state management and safer development.
					</CardItem>
					<CardItem logo="backend-logo.png" title="Backend Development" tags={["JavaScript", "NodeJS", "Express", "MongoDB", "MySQL"]}>
						Build REST API backend infrastructure using NodeJS and Express with either SQL or NoSQL database system for persistent data storage.
					</CardItem>
					<CardItem logo="data-analysis-logo.png" title="Data Analysis" tags={["Python", "Pandas", "Matplotlib", "Scikit Learn"]}>
						Find and identify pattern in data using python libraries and visualize it for conclusion or further analysis.
					</CardItem>
				</div>
			</div>
		</section>
	);
}

export default About;

function CardItem({ logo, title, subtitle, children, tags }) {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<img className={styles.cardLogo} src={`assets/about/${logo}`} alt={title} />
				<div className={styles.cardTitles}>
					<span className={styles.cardTitle}>{title}</span>
					{subtitle && <span className={styles.subtitle}>{subtitle}</span>}
				</div>
			</div>
			<div className={styles.cardBody}>{children}</div>
			<div className={styles.tagsContainer}>
				{tags &&
					tags.map((tag) => {
						return (
							<span key={tag} className={styles.tag}>
								{tag}
							</span>
						);
					})}
			</div>
		</div>
	);
}
