import React from "react";
import "./LogoSponsors.css";
import wantedFrame1 from "src/assets/Cartell A.png";
//import wantedFrame2 from "src/assets/Cartell B.png";

const LogoSponsors = ({ image, name }) => {
  return (
    <div className="wanted-poster">
      <img
        src={wantedFrame1}
        alt="Wanted frame"
        className="wanted-frame"
      />
      <div className="content">
        <img src={image} alt={name} className="company-logo" />
        <p className="company-name">{name}</p>
      </div>
    </div>
  );
};

export default LogoSponsors;

