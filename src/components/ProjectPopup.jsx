import React from "react";
import ReactDom from "react-dom";
import Seperator from "./Seperator";

const PROJECTS = {
    "ride-sharing-system": {
        name: "Ride Sharing System",
        technologies: "MySQL | Java | Git",
        imageUrl: "./assets/ride-sharing-system-preview.png",
        sourceCode: "https://github.com/nicktanryo/ride-sharing-system",
        liveDemo: null,
    },

    "path-finding-visualizer": {
        name: "Path Finding Visualizer",
        technologies: "React | TypeScript | Data Structure & Algorithm",
        imageUrl: "./assets/path-finding-visualizer-preview.png",
        sourceCode: "https://github.com/nicktanryo/path-finding-visualizer",
        liveDemo: "https://nicktanryo.github.io/path-finding-visualizer/",
    },
    "covid-19-tracker": {
        name: "COVID 19 Tracker",
        technologies: "React | TypeScript | Leaflet | ChartJS | APIs",
        imageUrl: "./assets/covid-19-tracker-preview.png",
        sourceCode: "https://github.com/nicktanryo/covid-19-tracker",
        liveDemo: "https://nicktanryo.github.io/covid-19-tracker/",
    },
    todoapp: {
        name: "TodoApp",
        technologies: "React | Material-UI | NodeJS | Express | MongoDB",
        imageUrl: "./assets/todoapp-preview.png",
        sourceCode: "https://github.com/nicktanryo/todoapp-ts",
        liveDemo: "https://todoapp-ts.herokuapp.com",
    },
    NONE: {
        name: "",
        technologies: "",
        imageUrl: "",
        sourceCode: "",
        liveDemo: "",
    },
};

export default function ProjectPopup({ projectSelected, onClose }) {
    let projectSelectedIsNone = projectSelected === "NONE";

    const { name, technologies, imageUrl, sourceCode, liveDemo } = PROJECTS[
        projectSelected
    ];

    return ReactDom.createPortal(
        <>
            <div
                className={
                    "popup-overlay " +
                    (!projectSelectedIsNone ? "show-overlay" : "")
                }
                onClick={onClose}
            />
            <div
                className={
                    "popup-modal " +
                    (!projectSelectedIsNone ? "show-popup" : "")
                }
            >
                <i className="fas fa-times cross-button" onClick={onClose}></i>
                <div className="project-details">
                    <div className="project-description">
                        <p>
                            <i className="fas fa-file-alt"></i> {name}
                        </p>
                        <p>
                            <i className="fas fa-terminal"></i> {technologies}
                        </p>
                    </div>
                    <div className="project-links">
                        <p>
                            <i className="fas fa-link"></i>{" "}
                            <a
                                href={sourceCode}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {sourceCode}
                            </a>
                        </p>
                        <p>
                            {liveDemo && (
                                <>
                                    <i className="fas fa-broadcast-tower"></i>{" "}
                                    <a
                                        href={liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {liveDemo}
                                    </a>
                                </>
                            )}
                        </p>
                    </div>
                </div>

                <Seperator />

                <img
                    src={imageUrl}
                    width="100%"
                    height="auto"
                    style={{
                        borderRadius: "10px",
                        maxHeight: "80%",
                    }}
                    alt={projectSelected}
                />
                {/* <div className="project-preview"></div> */}
            </div>
        </>,
        document.getElementById("portal")
    );
}
