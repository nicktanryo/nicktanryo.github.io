import React from "react";
import Header from "./Header";
import Seperator from "./Seperator";

export default function About() {
    return (
        <div className="about">
            <Header highlighted="about" />
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
                            src="assets/web-development.png"
                            className="image"
                            alt="web-development"
                        />

                        <div className="skills-content">
                            <h5>Web Development</h5>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                                Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of "de Finibus Bonorum et Malorum"
                            </p>
                        </div>
                    </div>

                    <div className="sub-skills">
                        <img
                            src="assets/ios-development.png"
                            className="image"
                            alt="ios-development"
                        />
                        <div className="skills-content">
                            <h5>IOS App Development</h5>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                                Lorem Ipsum comes from sections 1.10.32 and
                                1.10.33 of "de Finibus Bonorum et Malorum"
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
