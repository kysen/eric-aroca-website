import React, { useRef, useEffect } from "react";

import NavbarTab from "./navbar-tab";
import NavbarSocial from "./navbar-socialmedia-link";

import ericLogo from "../images/logos/ealogo.png";

import { withRouter } from "react-router-dom";

const Navbar = props => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("test", contentRef.current);
  }, [contentRef, props.location.pathname]);

  return (
    <div ref={contentRef} className="navbar-container">
      <div className="navbar-wrapper">
        <img className="navbar-logo" src={ericLogo} alt="" />
        <div className="navbar-right">
          <div className="social-media-links-wrapper">
            <NavbarSocial
              icon="facebook-f"
              site="https://www.facebook.com/live.the.life01/"
            />
            <NavbarSocial icon="twitter" site="https://twitter.com/arocaeric" />
            <NavbarSocial
              icon="instagram"
              site="https://www.instagram.com/ericarocalivethelife"
            />
            <NavbarSocial
              icon="youtube"
              site="https://www.youtube.com/channel/UCSKT4yb1nV5YTK_AauaeC_A"
            />
          </div>
          <div className="navbar-tabs">
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"home"}
              url="/"
              title={"Home"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"about"}
              url="/about-eric/"
              title={"About"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"meetingPlanner"}
              url="/meeting-planner/"
              title={"Meeting Planner"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"keynote"}
              url="/keynote-speaker/"
              title={"Keynote Speaker"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"corporate"}
              url="/corporate-coach/"
              title={"Corporate Coach"}
            />
            {/* <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"blog"}
              url="/blog-posts"

              title={"Blog"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
