import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer-container">
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
