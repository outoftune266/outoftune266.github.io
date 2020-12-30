import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Education from "./components/pages/educaiton";
import Skills from "./components/pages/skills";
import Interests from "./components/pages/interests";

function App() {
  return (
    <Router>
      <div id="page-top">
        <Nav />
        <div class="container-fluid p-0">
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/interests" component={Interests} />
        </div>
      </div>
    </Router>
  );
}

export default App;
