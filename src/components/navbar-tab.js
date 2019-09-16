import React from "react";

const NavbarTab = props => {
  return (
    <div
      className={`navbar-tab-item ${
        props.currentContent === props.tab ? "navbar-tab-item-active" : ""
      }`}
      onClick={() => props.setTab(props.tab)}
    >
      {props.title}
    </div>
  );
};

export default NavbarTab;
