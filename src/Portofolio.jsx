import React from "react";
import "./Portofolio.css";

import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const PAGES = {
    HOME: "HOME",
    ABOUT: "ABOUT",
    PROJECTS: "PROJECTS",
    CONTACT: "CONTACT",
};

export default function Portofolio() {
    return (
        <Router>
            <div className="root-container">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <Redirect to="/home" />}
                    />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}
