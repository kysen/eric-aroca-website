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
        Leadership and communication are the founding principles to building a
        culture that lasts. As a sought-after corporate coach – Eric has helped
        educational institutions and corporations build organizational cultures
        that last. Eric has worked with organizations to develop their values,
        mission statements, vision statement and to communicate these beliefs
        with clarity. Eric has coached fortune 500 companies and associations
        representing diverse industries. He has delivered speeches and training
        courses in over ten countries and his experience has made him a master
        of his craft.
      </div>
      <div className="divider">
        <div className="line" />
      </div>
      <div className="courses-title">
        - Below is a list of talks that Eric provides on the topic of Corporate
        Coaching -
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
