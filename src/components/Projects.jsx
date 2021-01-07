import React, { useState } from "react";

import Header from "./Header";
import ProjectPopup from "./ProjectPopup";

export default function Projects() {
    const [projectSelected, setProjectSelected] = useState("NONE");

    return (
        <div className="projects">
            <Header highlighted="projects" />
            <div className="projects-content">
                <h2 className="page-label">Projects</h2>
                <div className="projects-container">
                    <div
                        className="project ride-sharing-system"
                        onClick={() =>
                            setProjectSelected("ride-sharing-system")
                        }
                    >
                        <div className="project-overlay">
                            <h4 className="project-title">
                                Ride Sharing System
                            </h4>
                        </div>
                    </div>
                    <div
                        className="project path-finding-visualizer"
                        onClick={() =>
                            setProjectSelected("path-finding-visualizer")
                        }
                    >
                        <div className="project-overlay">
                            <h4 className="project-title">
                                Path Finding Visualizer
                            </h4>
                        </div>
                    </div>
                    <div
                        className="project covid-19-tracker"
                        onClick={() => setProjectSelected("covid-19-tracker")}
                    >
                        <div className="project-overlay">
                            <h4 className="project-title">COVID 19 Tracker</h4>
                        </div>
                    </div>
                    <div
                        className="project todoapp"
                        onClick={() => setProjectSelected("todoapp")}
                    >
                        <div className="project-overlay">
                            <h4 className="project-title">TodoApp</h4>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectPopup
                projectSelected={projectSelected}
                onClose={() => setProjectSelected("NONE")}
            />
        </div>
    );
}
