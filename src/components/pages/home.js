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

import absolute from "../../images/past-work-logos/absolute.png";
import caveman from "../../images/past-work-logos/caveman.png";
import dendreon from "../../images/past-work-logos/dendreon.png";
import everest from "../../images/past-work-logos/everest.png";
import intermountain from "../../images/past-work-logos/intermountain.png";
import jeppson from "../../images/past-work-logos/jeppson.png";
import legacy from "../../images/past-work-logos/legacy.png";
import lobos from "../../images/past-work-logos/lobos.jpg";
import pisa from "../../images/past-work-logos/pisa.png";
import salem from "../../images/past-work-logos/salem.png";
import samsung from "../../images/past-work-logos/samsung.png";
import squire from "../../images/past-work-logos/squire.png";
import uapcs from "../../images/past-work-logos/uapcs.jpg";
import uassp from "../../images/past-work-logos/uassp.jpg";
import uvu from "../../images/past-work-logos/uvu.png";

const Home = () => {
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  return (
    <div className="home-container">
      <div className="silent-background-video-wrapper">
        <img className="silent-video" src={eric} alt="silent-vid" />
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

        <div className="logo-wrapper">
          <img
            className="logo rectangular absolute"
            src={absolute}
            alt="past work logo"
          />
          <img
            className="logo circular lobos"
            src={lobos}
            alt="past work logo"
          />
          <img
            className="logo rectangular intermountain"
            src={intermountain}
            alt="past work logo"
          />
          <img className="logo circular uvu" src={uvu} alt="past work logo" />
          <img
            className="logo rectangular jeppson"
            src={jeppson}
            alt="past work logo"
          />
          <img
            className="logo circular caveman"
            src={caveman}
            alt="past work logo"
          />
          <img
            className="logo rectangular salem"
            src={salem}
            alt="past work logo"
          />
          <img
            className="logo circular uassp"
            src={uassp}
            alt="past work logo"
          />
          <img
            className="logo rectangular samsung"
            src={samsung}
            alt="past work logo"
          />
          <img
            className="logo rectangular squire"
            src={squire}
            alt="past work logo"
          />

          <img
            className="logo circular legacy"
            src={legacy}
            alt="past work logo"
          />
          <img
            className="logo rectangular dendreon"
            src={dendreon}
            alt="past work logo"
          />
          <img className="logo circular pisa" src={pisa} alt="past work logo" />
          <img
            className="logo circular uapcs"
            src={uapcs}
            alt="past work logo"
          />
          <img
            className="logo rectangular everest"
            src={everest}
            alt="past work logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
