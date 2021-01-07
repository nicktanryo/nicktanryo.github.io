import React from "react";
import Header from "./Header";

export default function Home() {
    return (
        <div className="home">
            <div className="background-image d-none"></div>
            <div className="gradient-color"></div>

            <Header highlighted="home" />
            <div className="home-content max-width">
                <h6>Hello there, my name is</h6>
                <h1>Nicholas Tanryo</h1>
                <h3>
                    And I'm a <span className="typing"></span>
                </h3>
            </div>
        </div>
    );
}
