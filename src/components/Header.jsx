import React from "react";
import { PAGES } from "../Portofolio";

export default function Header({ highlighted }) {
    return (
        <nav className="navbar">
            <div className="max-width">
                <div>
                    {highlighted === PAGES.ABOUT && (
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
                            href="/#/home"
                            className={
                                "menu-btn " +
                                (highlighted === PAGES.HOME && "highlighted")
                            }
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#/about"
                            className={
                                "menu-btn " +
                                (highlighted === PAGES.ABOUT && "highlighted")
                            }
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#/projects"
                            className={
                                "menu-btn " +
                                (highlighted === PAGES.PROJECTS &&
                                    "highlighted")
                            }
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#/contact"
                            className={
                                "menu-btn " +
                                (highlighted === PAGES.CONTACT && "highlighted")
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
