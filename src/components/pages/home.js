import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import ImageGallery from "react-image-gallery";

import stageEric from "../../images/scrolling-pictures/stage-eric.jpg";
import withStudents from "../../images/scrolling-pictures/with-students.png";
import americanFlag from "../../images/scrolling-pictures/american-flag.png";

import headShot from "../../images/self-pictures/headshot-large.jpg";

import book from "../../images/book/book.png";
import leftColumnImage from "../../images/book/left-book.png";
import rightColumnImage from "../../images/book/right-book.JPG";

import absolute from "../../images/past-work-logos/absolute.png";
import bottega from "../../images/past-work-logos/bottega.png";
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
import tissue from "../../images/past-work-logos/tissue-tech.png";
import uapcs from "../../images/past-work-logos/uapcs.jpg";
import uassp from "../../images/past-work-logos/uassp.jpg";
import uvu from "../../images/past-work-logos/uvu.png";

const Home = () => {
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  const render1 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={stageEric}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          <div className="overlapping-title">Eric Aroca</div>
          <div className="overlapping-sub-title">
            Inspiring others to Dream more, Learn more, Do more, and Become more
          </div>
        </div>
      </div>
    );
  };
  const render2 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={withStudents}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          <div className="overlapping-title">Live the Life</div>
          <div className="overlapping-sub-title">
            Ignite Your life, fight for it. Live the life you've imagined
          </div>
        </div>
      </div>
    );
  };
  const render3 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={americanFlag}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          <div className="overlapping-title">Inspire</div>
          <div className="overlapping-sub-title">
            Eric Aroca can inspire your group to reach their goals and dreams
          </div>
        </div>
      </div>
    );
  };
  const images = [
    {
      thumbnail: stageEric,
      renderItem: render1
    },
    {
      thumbnail: withStudents,
      renderItem: render2
    },
    {
      thumbnail: americanFlag,
      renderItem: render3
    }
  ];

  return (
    <div className="home-container">
      <div className="scrolling-items-wrapper">
        <ImageGallery items={images} />
      </div>

      <div className="power-words">
        Keynote Speaker | Author | Corporate Coache
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
              Everyone has a story to tell. What sets Eric Aroca apart from the
              rest is an ability to weave inspiration into attention-grabbing
              speeches that are nothing short of a verbal joyride. Eric uses
              humor, insight and masterful storytelling skills to captivate his
              audience. His entertaining and motivating style will inspire your
              group to live the life they have always imagined.
            </div>
          </div>
          <div className="column-wrapper">
            <img
              src={book}
              alt="Middle Column"
              onClick={() =>
                (window.location =
                  "https://www.amazon.com/Live-Life-Youve-Always-Imagined/dp/0692630899/")
              }
            />
            <div className="column-title">Author</div>
            <div className="column-paragraph">
              This book will teach you the principles you need to bridge the gap
              from your reality and the life you’ve always imagined.
            </div>
            <div className="column-paragraph">
              “I have stacks of self-help books on my desk.{" "}
              <text
                onClick={() =>
                  (window.location =
                    "https://www.amazon.com/Live-Life-Youve-Always-Imagined/dp/0692630899/")
                }
              >
                ‘Live the Life’
              </text>{" "}
              is in a class by itself among the rest as my new preferred
              guidebook to success.” Jason Hewlett, CSP
            </div>
            <button
              onClick={() =>
                (window.location =
                  "https://www.amazon.com/Live-Life-Youve-Always-Imagined/dp/0692630899/")
              }
            >
              Buy the Book!
            </button>
          </div>
          <div className="column-wrapper">
            <img src={rightColumnImage} alt="Right Column" />
            <div className="column-title">Corporate Coach</div>
            <div className="column-paragraph">
              As a Presidents Club Award winner, Eric has performed at elevated
              levels in the high tech, pharmaceutical and medical device
              industries. He has had the opportunity to speak and train
              audiences around the world.
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
            className="logo rectangular tissue"
            src={tissue}
            alt="past work logo"
          />
          <img
            className="logo rectangular salem"
            src={salem}
            alt="past work logo"
          />
          <img
            className="logo rectangular bottega"
            src={bottega}
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
