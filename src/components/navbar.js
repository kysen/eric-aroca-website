import React from "react";

import ericLogo from "../images/logos/ltl-eric-aroca.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = props => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <img className="navbar-logo" src={ericLogo} alt="" />
        <div className="navbar-right">
          <div className="social-media-links-wrapper">
            <div className="social-media-link">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </div>
            <div className="social-media-link">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </div>
            <div className="social-media-link">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </div>
            <div className="social-media-link">
              <FontAwesomeIcon icon={["fab", "pinterest"]} />
            </div>
            <div className="social-media-link">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </div>
          </div>
          <div className="navbar-tabs">
            <div
              className="navbar-tab-item"
              onClick={() => props.setTab("home")}
            >
              Home
            </div>
            <div
              className="navbar-tab-item"
              onClick={() => props.setTab("about")}
            >
              About
            </div>
            <div
              className="navbar-tab-item"
              onClick={() => props.setTab("contact")}
            >
              Contact
            </div>
            <div
              className="navbar-tab-item"
              onClick={() => props.setTab("meetingPlanner")}
            >
              Meeting Planner
            </div>
            <div
              className="navbar-tab-item"
              onClick={() => props.setTab("blog")}
            >
              Blog
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
