import React from "react";

import ericHeadshot from "../../images/self-pictures/family-pic.JPG";

const About = () => {
  return (
    <div className="about-container">
      <img src={ericHeadshot} alt="eric headshot" />
      <div className="about-content-wrapper">
        <div className="about-title">Eric Aroca</div>
        <div className="about-subtitle">- Motivational Speaker -</div>

        {/* TODO */}
        <div className="about-paragraph-wrapper">
          <div className="about-paragraph">
            Eric is helping organizations and individual to have a purpose
            driven approach to create a culture that will encourage leadership,
            personal development and inspire them to live the life they have
            always imagined.{" "}
          </div>

          <div className="about-paragraph">
            Everyone has a story to tell. What sets Eric Aroca apart from the
            rest is an ability to weave inspiration into attention-grabbing
            speeches that are nothing short of a verbal joyride. Eric uses
            humor, insight and masterful storytelling skills to captivate his
            audience in such a way that his message will stay with his listeners
            long after they have left the building. Eric will inspire your group
            to reach their goals and dreams. His entertaining and motivating
            style will encourage people of all ages to learn more, do more and
            become more.{" "}
          </div>

          <div className="about-paragraph">
            Eric married his high school sweetheart and together they have five
            children and one handsome grandson. Eric loves bass fishing,
            photography and reading. He currently resides in Spanish Fork, Utah.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
