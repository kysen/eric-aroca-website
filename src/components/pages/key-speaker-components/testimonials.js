import React from "react";

const Testimonial = props => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-text">{props.content}</div>
      <div className="testimonial-writer">{props.who}</div>
    </div>
  );
};

export default Testimonial;
