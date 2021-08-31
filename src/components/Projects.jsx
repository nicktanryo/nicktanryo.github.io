import React from "react";
import { PROJECTS_INFO } from "../settings/ProjectInfos";
import styles from "../styles/Projects.module.scss";

function Projects() {
	return (
		<section id="projects" className={styles.projects}>
			<h2 className={styles.subHeader}>Projects</h2>
			<div className={styles.cardsContainer}>
				{PROJECTS_INFO.map((project, index) => {
					return <ProjectCard key={`${project.title}-${index}`} project={project} />;
				})}
			</div>
		</section>
	);
}

export default Projects;

function ProjectCard({ project }) {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img src={`assets/projects/${project.imageSource}`} className={styles.projectLogo} alt={project.title} />
			</div>
			<div className={styles.cardContent}>
				<h3 className={styles.projectTitle}>{project.title}</h3>

				<div className={styles.projectDescription}>
					<div className={styles.projectLinks}>
						{/* <span className={styles.seperator}></span> */}
						{project.githubLink && (
							<a href={project.githubLink} target="_blank" rel="noreferrer">
								Github Repo
							</a>
						)}
						{/* {project.githubLink && project.demoLink && <span className={styles.seperator}></span>} */}
						{project.demoLink && (
							<a href={project.demoLink} target="_blank" rel="noreferrer">
								Live Demo
							</a>
						)}
						{/* <span className={styles.seperator}></span> */}
					</div>
					<div className={styles.description}>
						<img className={styles.projectPreview} src={`assets/projects/${project.previewSource}`} alt={project.title} />
					</div>
					<div className={styles.projectTags}>
						{project.tags.map((tag, index) => {
							return <ProjectTag key={`${tag}-${index}`} tag={tag} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

function ProjectTag({ tag }) {
	return <span className={styles.projectTag}>{tag}</span>;
}
