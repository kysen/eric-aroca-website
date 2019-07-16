// TODO
// make youtube component pop up on screen
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import headShot from "../../images/self-pictures/headshot-large.jpg";
import eric from "../../images/gallery/eric.jpg";

const Home = () => {
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  return (
    <div className="home-container">
      <div className="silent-background-video-wrapper">
        <img className="silent-video" src={eric} alt="" />
      </div>
      <div className="power-words">
        Motivational Speaker | Salesman | Author
      </div>
      <div className="demo-video-section">
        <img src={headShot} alt="head-shot" />
        <div
          className="watch-video-button"
          onClick={() => setYoutubeOpen(true)}
        >
          Watch Video
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={youtubeOpen}
        videoId="sESsfgfNtUQ"
        onClose={() => setYoutubeOpen(false)}
      />
    </div>
  );
};

export default Home;
