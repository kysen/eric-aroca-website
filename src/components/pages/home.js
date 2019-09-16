import React from "react";
// import { Document } from "react-pdf";

import ThreeSlides from "./home-components/three-slides";
import DemoVideo from "./home-components/demo-video";
import ThreeColumn from "./home-components/three-column-section";
import RCLogos from "./home-components/recient-client-logos";

const Home = () => {
  return (
    <div className="home-container">
      <ThreeSlides />
      <div className="power-words">
        Keynote Speaker | Author | Corporate Coach
      </div>
      <DemoVideo />
      <div className="divider">
        <div className="line" />
      </div>
      <ThreeColumn />
      <div className="divider">
        <div className="line" />
      </div>
      <RCLogos />
    </div>
  );
};

export default Home;
