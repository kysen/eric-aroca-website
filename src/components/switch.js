import React, { useState, useEffect } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import MeetingPlanner from "./pages/meeting-planner";
import Blog from "./pages/blog";

const Switch = props => {
  const [switchContent, setSwitch] = useState(<Home />);

  useEffect(() => {
    if (props.currentContent === "about") {
      setSwitch(<About />);
    } else if (props.currentContent === "contact") {
      setSwitch(<Contact />);
    } else if (props.currentContent === "meetingPlanner") {
      setSwitch(<MeetingPlanner />);
    } else if (props.currentContent === "blog") {
      setSwitch(<Blog />);
    } else {
      setSwitch(<Home />);
    }
  }, [props.currentContent]);

  return <div className="switch-container">{switchContent}</div>;
};

export default Switch;
