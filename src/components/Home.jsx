import React, { useEffect } from "react";
import Typed from "typed.js";
import $ from "jquery";
import Header from "./Header";
import { PAGES } from "../Portofolio";

export default function Home() {
    useEffect(() => {
        $(".background-image").fadeIn(500);
        var typed = new Typed(".typing", {
            strings: ["Developer", "Student"],
            typeSpeed: 120,
            backSpeed: 100,
            loop: true,
        });
        typed.start();
    }, []);

    return (
        <div className="home">
            <div className="background-image d-none"></div>
            <div className="gradient-color"></div>

            <Header highlighted={PAGES.HOME} />
            <div className="home-content max-width">
                <h6>Hello there, my name is</h6>
                <h1>Nicholas Tanryo</h1>
                <h3>
                    <span className="typing"></span>
                </h3>
            </div>
        </div>
    );
}
