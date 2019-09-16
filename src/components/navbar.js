import React from "react";

import NavbarTab from "./navbar-tab";
import NavbarSocial from "./navbar-socialmedia-link";

import ericLogo from "../images/logos/ltl-eric-aroca.png";

const Navbar = props => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <img className="navbar-logo" src={ericLogo} alt="" />
        <div className="navbar-right">
          <div className="social-media-links-wrapper">
            <NavbarSocial
              icon="facebook-f"
              site="https://www.facebook.com/earoca1"
            />
            <NavbarSocial icon="twitter" site="https://twitter.com/arocaeric" />
            <NavbarSocial
              icon="instagram"
              site="https://www.instagram.com/ericarocalivethelife"
            />
            <NavbarSocial
              icon="pinterest"
              site="https://www.pinterest.com/earoca15/"
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
              title={"Home"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"about"}
              title={"About"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"meetingPlanner"}
              title={"Meeting Planner"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"keynote"}
              title={"Keynote Speaker"}
            />
            <NavbarTab
              setTab={props.setTab}
              currentContent={props.currentContent}
              tab={"blog"}
              title={"Blog"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
