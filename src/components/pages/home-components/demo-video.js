import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import headShotSquare from "../../../images/self-pictures/headshot-square.png";

const DemoVideo = () => {
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  return (
    <div className="demo-video-container">
      <div className="demo-video-section">
        <img src={headShotSquare} alt="head-shot" />
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

export default DemoVideo;
