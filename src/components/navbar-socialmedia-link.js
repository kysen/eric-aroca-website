import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarSocial = props => {
  return (
    <div className="social-media-link" onClick={() => window.open(props.site)}>
      <FontAwesomeIcon icon={["fab", props.icon]} />
    </div>
  );
};

export default NavbarSocial;
