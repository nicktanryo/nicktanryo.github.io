import React, { useEffect } from "react";
import $ from "jquery";
import { PAGES } from "../Portofolio";

export default function Header({ highlighted }) {
    useEffect(() => {
        $(".navbar .menu li a").click(function () {
            // applying again smooth scroll on menu items click
            $("html").css("scrollBehavior", "smooth");
        });

        // toggle menu/navbar script
        $(".menu-btn").click(function () {
            $(".navbar .menu").toggleClass("active");
            $(".menu-btn i").toggleClass("active");
        });
    }, []);
    return (
        <nav className="navbar">
            <div className="max-width">
                <div>
                    {highlighted === PAGES.ABOUT && (
                        <a className="download-cv" href="/assets/NicholasTanryo.pdf" download>
                            Download CV
                        </a>
                    )}
                </div>
                <ul className="menu">
                    <li>
                        <a href="/#/home" className={"menu-btn " + (highlighted === PAGES.HOME && "highlighted")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/#/about" className={"menu-btn " + (highlighted === PAGES.ABOUT && "highlighted")}>
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#/projects"
                            className={"menu-btn " + (highlighted === PAGES.PROJECTS && "highlighted")}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/#/contact" className={"menu-btn " + (highlighted === PAGES.CONTACT && "highlighted")}>
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
