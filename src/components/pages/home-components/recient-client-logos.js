import React from "react";

import absolute from "../../../images/past-work-logos/absolute.png";
import bottega from "../../../images/past-work-logos/bottega.png";
import caveman from "../../../images/past-work-logos/caveman.png";
import dendreon from "../../../images/past-work-logos/dendreon.png";
import everest from "../../../images/past-work-logos/everest.png";
import intermountain from "../../../images/past-work-logos/intermountain.png";
import jeppson from "../../../images/past-work-logos/jeppson.png";
import legacy from "../../../images/past-work-logos/legacy.png";
import lobos from "../../../images/past-work-logos/lobos.jpg";
import pisa from "../../../images/past-work-logos/pisa.png";
import salem from "../../../images/past-work-logos/salem.png";
import samsung from "../../../images/past-work-logos/samsung.png";
import squire from "../../../images/past-work-logos/squire.png";
import tissue from "../../../images/past-work-logos/tissue-tech.png";
import uapcs from "../../../images/past-work-logos/uapcs.jpg";
import uassp from "../../../images/past-work-logos/uassp.jpg";
import uvu from "../../../images/past-work-logos/uvu.png";

const RCLogos = () => {
  return (
    <div className="recent-clients-section">
      <div className="section-title">Recent Clients</div>

      <div className="logo-wrapper">
        <img
          className="logo rectangular absolute"
          src={absolute}
          alt="past work logo"
        />
        <img className="logo circular lobos" src={lobos} alt="past work logo" />
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
        <img className="logo circular uassp" src={uassp} alt="past work logo" />
        <img
          className="logo rectangular samsung"
          src={samsung}
          alt="past work logo"
        />
        <img
          className="logo rectangular squire"
          src={squire}
          alt="past work logo"
          // onClick={() => pastWorkClick("squire")}
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
        <img className="logo circular uapcs" src={uapcs} alt="past work logo" />
        <img
          className="logo rectangular everest"
          src={everest}
          alt="past work logo"
        />
      </div>
    </div>
  );
};

export default RCLogos;
