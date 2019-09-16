import React, { useState, useEffect } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import MeetingPlanner from "./pages/meeting-planner";
import KeynoteSpeaker from "./pages/keynote-speaker";
import CorporateCoach from "./pages/corporate-coach";
import Blog from "./pages/blog";

const Switch = props => {
  const [switchContent, setSwitch] = useState(<Home setTab={props.setTab} />);

  useEffect(() => {
    if (props.currentContent === "about") {
      setSwitch(<About />);
    } else if (props.currentContent === "meetingPlanner") {
      setSwitch(<MeetingPlanner />);
    } else if (props.currentContent === "keynote") {
      setSwitch(<KeynoteSpeaker />);
    } else if (props.currentContent === "corporate") {
      setSwitch(<CorporateCoach />);
    } else if (props.currentContent === "blog") {
      setSwitch(<Blog />);
    } else {
      setSwitch(<Home setTab={props.setTab} />);
    }
  }, [props.currentContent, props.setTab]);

  return <div className="switch-container">{switchContent}</div>;
};

export default Switch;
