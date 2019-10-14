import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import MeetingPlanner from "./pages/meeting-planner";
import KeynoteSpeaker from "./pages/keynote-speaker";
import CorporateCoach from "./pages/corporate-coach";
import Blog from "./pages/blog";

const Routes = {
  "/": () => <Home />,
  "/about-eric": () => <About />,
  "/meeting-planner": () => <MeetingPlanner />,
  "/keynote-speaker": () => <KeynoteSpeaker />,
  "/corporate-coach": () => <CorporateCoach />,
  "/blog-posts": () => <Blog />
};

const Switcher = props => {
  return (
    <div className="switch-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-eric" component={About} />
        <Route path="/meeting-planner" component={MeetingPlanner} />
        <Route path="/keynote-speaker" component={KeynoteSpeaker} />
        <Route path="/corporate-coach" component={CorporateCoach} />
        <Route path="/blog-posts" component={Blog} />
      </Switch>
    </div>
  );
};

export default Switcher;
