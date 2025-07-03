import React from "react";
import "./LogoSponsors.css";
import wantedFrame1 from "src/assets/Cartell A.png";
//import wantedFrame2 from "src/assets/Cartell B.png";

const LogoSponsors = ({ image, name }) => {
  return (
    <div className="relative w-52 h-48 bg-background-cartellA bg-cover items-center justify-center content-center">   
      {/* Contingut centrat dins el marc marró */}
      <div
        className="
          w-9/12 h-5/12 flex flex-col items-center justify-center p-4 self-center"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-auto max-h-[70%] object-contain"
        />
      </div>
        {/* <p className="text-xs font-bold text-[#4b2e16] text-center mt-2">
          {name}
        </p> */}
    </div>
  );
};

export default LogoSponsors;