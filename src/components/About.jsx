import React from "react";
import { PAGES } from "../Portofolio";
import Header from "./Header";
import Seperator from "./Seperator";
import Tooltip from "@material-ui/core/Tooltip";

const frontend = [
    { logo: "react", text: "React" },
    { logo: "js", text: "JavaScript" },
    { logo: "ts", text: "TypeScript" },
    { logo: "materialui", text: "Material UI" },
];

const backend = [
    { logo: "nodejs", text: "NodeJS" },
    { logo: "mongodb", text: "MongoDB" },
];

const ios = [
    { logo: "swift", text: "Swift" },
    { logo: "xcode", text: "Xcode" },
];

const miscellaneous = [
    { logo: "git", text: "Git" },
    { logo: "vscode", text: "Visual Studio Code" },
    { logo: "linux", text: "Linux" },
];

export default function About() {
    return (
        <div className="about">
            <Header highlighted={PAGES.ABOUT} />
            <div className="about-content">
                <h2 className="page-label">About Me</h2>
                <section className="education">
                    <h3 style={{ textDecoration: "underline" }}>Education</h3>
                    <div className="sub-education">
                        <span className="education-duration">
                            2018 - Present
                        </span>

                        <div className="education-content-container">
                            <div className="progress-line"></div>
                            <div className="education-content">
                                <h5>
                                    The Chinese University of Hong Kong - Hong
                                    Kong
                                </h5>
                                <h6>Major: Computer Science</h6>
                                <h6>CGPA : 3.5 / 4.0</h6>
                            </div>
                        </div>
                    </div>

                    <div className="sub-education">
                        <span className="education-duration">2015 - 2018</span>

                        <div className="education-content-container">
                            <div className="progress-line"></div>
                            <div className="education-content">
                                <h5>SMA Sutomo 1 - Medan, Indonesia</h5>
                                <h6>Concentration: Science</h6>
                                <h6>Grade : 93.5 / 100</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <Seperator />

                <section className="skills">
                    <h3 style={{ textDecoration: "underline" }}>Skills</h3>

                    <div className="sub-skills">
                        <img
                            src="assets/frontend-logo.png"
                            className="image"
                            alt="frontend"
                        />

                        <div className="skills-content">
                            <h5>Frontend Development</h5>
                            <div className="logos-container">
                                <Logos technologies={frontend} />
                            </div>

                            <p>
                                Able to equally use JavaScript and TypeScript to
                                build a website using React together with
                                Material UI for the styling.
                            </p>
                        </div>
                    </div>

                    <div className="sub-skills">
                        <img
                            src="assets/backend-logo.png"
                            className="image"
                            alt="backend"
                        />

                        <div className="skills-content">
                            <h5>Backend Development</h5>
                            <div className="logos-container">
                                <Logos technologies={backend} />
                            </div>
                            <p>
                                Design and build backend infrastructure with
                                REST API using NodeJS and express. Using MongoDB
                                and Mongoose for the database system.
                            </p>
                        </div>
                    </div>

                    <div className="sub-skills">
                        <img
                            src="assets/ios-logo.png"
                            className="image"
                            alt="ios-development"
                        />
                        <div className="skills-content">
                            <h5>IOS App Development</h5>

                            <div className="logos-container">
                                <Logos technologies={ios} />
                            </div>
                            <p>
                                Developing iOS app with Swiff, Swift UI and
                                built using Xcode
                            </p>
                        </div>
                    </div>

                    <div className="sub-skills">
                        <img
                            src="assets/miscellaneous-logo.png"
                            className="image"
                            alt="misc"
                        />

                        <div className="skills-content">
                            <h5>Miscellaneous Technologies</h5>
                            <div className="logos-container">
                                <Logos technologies={miscellaneous} />
                            </div>
                            <p></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function Logos({ technologies }) {
    return (
        <>
            {technologies.map((skill) => (
                <>
                    <Tooltip title={skill.text}>
                        <img
                            src={`assets/${skill.logo}-logo.png`}
                            className="technology-logo"
                            alt={skill.text}
                        />
                    </Tooltip>
                </>
            ))}
        </>
    );
}
