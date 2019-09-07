import React from "react";

const MPItem = props => {
  return (
    <div className="mpitem-container">
      {" "}
      <div className="item-title">{props.title}</div>
      <div className="item-content">{props.content}</div>
    </div>
  );
};

export default MPItem;
