import React from "react";

import ImageGallery from "react-image-gallery";

import stageEric from "../../../images/scrolling-pictures-1893x728/brown-suit.png";
import behindStage from "../../../images/scrolling-pictures-1893x728/behind-stage2.png";
import americanFlag from "../../../images/scrolling-pictures-1893x728/american-flag.png";
import bigStage from "../../../images/scrolling-pictures-1893x728/big-stage.png";
import purpleCurtain from "../../../images/scrolling-pictures-1893x728/purple-curtain.png";
import uvuPresentation from "../../../images/scrolling-pictures-1893x728/uvu-presentation.png";

const ThreeSlides = () => {
  const render1 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={stageEric}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          {/* <div className="overlapping-title">Eric Aroca</div> */}
          {/* <div className="overlapping-sub-title">
            Inspiring others to Dream more, Learn more, Do more, and Become more
          </div> */}
        </div>
      </div>
    );
  };
  const render2 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={behindStage}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          {/* <div className="overlapping-title">
            Title should read Leadership and communication are the founding
            principles to building a culture that lasts
          </div> */}
          {/* <div className="overlapping-sub-title">
            Ignite Your life, fight for it. Live the life you've imagined
          </div> */}
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
          {/* <div className="overlapping-title">Inspire</div> */}
          {/* <div className="overlapping-sub-title">
            Eric Aroca can inspire your group to reach their goals and dreams
          </div> */}
        </div>
      </div>
    );
  };
  const render4 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={bigStage} alt="silent-vid" />
        <div className="overlapping-text">
          {/* <div className="overlapping-title">
            Values become the disinfectant to your culture
          </div> */}
          {/* <div className="overlapping-sub-title">
            Eric Aroca can inspire your group to reach their goals and dreams
          </div> */}
        </div>
      </div>
    );
  };
  const render6 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={purpleCurtain}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          {/* <div className="overlapping-title">Your culture is your brand</div> */}
          {/* <div className="overlapping-sub-title">
            Eric Aroca can inspire your group to reach their goals and dreams
          </div> */}
        </div>
      </div>
    );
  };
  const render7 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={uvuPresentation}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          {/* <div className="overlapping-title">
            Ignite you culture with passion, purpose and perseverance
          </div> */}
          {/* <div className="overlapping-sub-title">
            Eric Aroca can inspire your group to reach their goals and dreams
          </div> */}
        </div>
      </div>
    );
  };

  const images = [
    {
      renderItem: render1
    },
    {
      renderItem: render2
    },
    {
      renderItem: render3
    },
    {
      renderItem: render4
    },
    {
      renderItem: render6
    },
    {
      renderItem: render7
    }
  ];
  return (
    <div className="scrolling-items-wrapper">
      <ImageGallery
        items={images}
        showThumbnails={false}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={8000}
      />
    </div>
  );
};

export default ThreeSlides;
