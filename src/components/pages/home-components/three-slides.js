import React from "react";

import ImageGallery from "react-image-gallery";

import stageEric from "../../../images/scrolling-pictures/brown-suit.png";
import withStudents from "../../../images/scrolling-pictures/with-students.png";
import americanFlag from "../../../images/scrolling-pictures/american-flag.png";
import brownSuit from "../../../images/scrolling-pictures/brown-suit-7.png";

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
  const render4 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={brownSuit}
          alt="silent-vid"
        />
        <div className="overlapping-text">
          <div className="overlapping-title">Example Title</div>
          <div className="overlapping-sub-title">this is example text</div>
        </div>
      </div>
    );
  };
  const images = [
    {
      thumbnail: brownSuit,
      renderItem: render4
    },
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
