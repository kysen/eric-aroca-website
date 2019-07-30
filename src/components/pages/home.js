// TODO
// make youtube component pop up on screen
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import headShot from "../../images/self-pictures/headshot-large.jpg";
import eric from "../../images/gallery/eric.jpg";

// import byBook from "../../images/book/by-book.jpg";
import leftColumnImage from "../../images/gallery/bad-quality/IMG_0970.jpg";
// import middleColumnImage from "../../images/gallery/bad-quality/IMG_0970.jpg";
// import rightColumnImage from "../../images/gallery/bad-quality/IMG_3441.JPG";

const Home = () => {
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  return (
    <div className="home-container">
      <div className="silent-background-video-wrapper">
        <img className="silent-video" src={eric} alt="" />
      </div>
      <div className="power-words">Keynote Speaker | Thing | Thing</div>
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
      <div className="divider">
        <div className="line" />
      </div>
      <div className="three-column-section">
        <div className="section-title">Example Title</div>
        <div className="three-column-wrapper">
          <div className="column-wrapper">
            <img src={leftColumnImage} alt="Left Column" />

            <div className="column-title">Keynote Speaker</div>
            <div className="column-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quisquam porro sint eveniet. Eos soluta consectetur nobis
              inventore distinctio iure!
            </div>
          </div>
          <div className="column-wrapper">
            <img src={leftColumnImage} alt="Middle Column" />
            <div className="column-title">title</div>
            <div className="column-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quisquam porro sint eveniet. Eos soluta consectetur nobis
              inventore distinctio iure!
            </div>
          </div>
          <div className="column-wrapper">
            <img src={leftColumnImage} alt="Right Column" />
            <div className="column-title">title</div>
            <div className="column-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quisquam porro sint eveniet. Eos soluta consectetur nobis
              inventore distinctio iure!
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="line" />
      </div>

      <div className="recent-clients-section">
        <div className="section-title">Recent Clients</div>
      </div>
    </div>
  );
};

export default Home;
