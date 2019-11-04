import React from "react";

import TrainingCourses from "./corporate-components/training-courses";
import Testimonial from "./key-speaker-components/testimonials";

const CorporateCoach = () => {
  return (
    <div className="corporate-coach-container">
      <div className="corporate-coach-title">
        Corporate Culture Coach & Consultant
      </div>
      <div className="corporate-subtitle">
        Eric Aroca accepts coaching and consulting assignments with leaders and
        organizations that wish to see their organization culture come to life.
        Eric brings his passion and expertise to the clients he accepts.
      </div>
      <div className="divider">
        <div className="line" />
      </div>
      <div className="courses-title">
        Eric's areas of focus for Coaching and Consulting include:
      </div>
      <TrainingCourses />
      <div className="divider">
        <div className="line" />
      </div>
      <div className="testimonials-container">
        <div className="testimonial-section-title">
          Corporate Coaching Testimonials
        </div>
        <Testimonial
          who="Tina Smith Chief Operations Officer Utah Association of Public Charter Schools"
          content="Eric brought his excitement and expertise to one of our breakout sessions encouraging those in attendance to remember why they choose to be educators and how to ignite or reignite that passion with purpose and perseverance.  "
        />
        <Testimonial
          who="Marie Tasker, Trainer & Instructional Development"
          content="He shared his secrets with those trainer candidates to allow for growth and development in the curriculum they were tasked to deliver. Eric’s natural ability to speak in front of groups is evident by his delivery of the training materials he was empowered to present. "
        />
        <Testimonial
          who="Lynn Mecham, Principal, Landmark High School"
          content="It is with great pleasure and without reservation that I recommend Eric Aroca as a consultant/coach in your organization. As the Principal for Landmark High, I have worked with Eric for the last two years while he has served as the School Culture Specialist at our school.  At the beginning of the school year, Eric was instrumental in helping us develop a vision and a set of values to base our school mission statement upon. He led our staff and faculty throughout the year in building a positive atmosphere where students and staff could thrive. "
        />
      </div>
    </div>
  );
};
export default CorporateCoach;
