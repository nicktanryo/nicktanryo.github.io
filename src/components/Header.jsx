import React from "react";

export default function Header({ highlighted }) {
    return (
        <nav className="navbar">
            <div className="max-width">
                <div>
                    {highlighted === "about" && (
                        <a
                            className="download-cv"
                            href="/assets/Nicholas_Tanryo_CV.pdf"
                            download
                        >
                            Download CV
                        </a>
                    )}
                </div>
                <ul className="menu">
                    <li>
                        <a
                            href="/home"
                            className={
                                "menu-btn " +
                                (highlighted === "home" && "highlighted")
                            }
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className={
                                "menu-btn " +
                                (highlighted === "about" && "highlighted")
                            }
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/projects"
                            className={
                                "menu-btn " +
                                (highlighted === "projects" && "highlighted")
                            }
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className={
                                "menu-btn " +
                                (highlighted === "contact" && "highlighted")
                            }
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}
