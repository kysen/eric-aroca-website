import React from "react";
import { NavLink } from "react-router-dom";

const NavbarTab = props => {
  return (
    <NavLink
      className="navbar-tab-item"
      activeClassName="navbar-tab-item-active"
      exact
      to={props.url}
    >
      {props.title}
    </NavLink>
  );
};

export default NavbarTab;
