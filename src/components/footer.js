import React from "react";
import Linkify from "react-linkify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import circularHeadshot from "../images/self-pictures/headshot-small-circle.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-info-wrapper">
        <div className="contact-left">
          <div
            onClick={() => {
              navigator.clipboard.writeText("8013685266");
            }}
          >
            <FontAwesomeIcon className="contact-icon" icon={["fas", "phone"]} />
            801-368-5266
          </div>
          <Linkify>
            <div className="contact-item">
              <FontAwesomeIcon
                className="contact-icon"
                icon={["fas", "envelope"]}
              />
              <div>livethelife@EricAroca.com</div>
            </div>
          </Linkify>
          {/* <div>meeting planner</div> */}
        </div>

        <img src={circularHeadshot} alt="heashot" />
      </div>
      <div className="copyright-wrapper">
        <FontAwesomeIcon
          className="copyright-icon"
          icon={["far", "copyright"]}
        />
        <div className="copyright-text">
          2015 EricAroca.com - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
