import React from "react";

import book from "../../../images/book/book.png";
import leftColumnImage from "../../../images/book/left-book.png";
import rightColumnImage from "../../../images/book/right-book.JPG";

const ThreeColumn = () => {
  return (
    <div className="three-column-section">
      <div className="section-title three-column-title">
        "Why is Eric Aroca the leading voice on building culture?"
      </div>
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
            is in a class by itself among the rest as my new preferred guidebook
            to success.” Jason Hewlett, CSP
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
            industries. He has had the opportunity to speak and train audiences
            around the world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumn;
