import React from "react";
// import Typed from "typed.js";
// import $ from "jquery";
import "./Portofolio.css";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
