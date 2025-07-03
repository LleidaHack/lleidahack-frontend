import React from "react";
//import wantedFrame2 from "src/assets/Cartell B.png";

const LogoSponsors = ({ image, name }) => {
  return (
    <div className="relative w-52 h-48 bg-background-cartellA bg-cover items-center justify-center content-center flex">   
      {/* Contingut centrat dins el marc marró */}
      <div
        className="w-9/12 h-3/12 flex flex-col items-center justify-center mt-8 px-2"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-24 object-contain"
        />
      </div>
        {/* <p className="text-xs font-bold text-[#4b2e16] text-center mt-2">
          {name}
        </p> */}
    </div>
  );
};

export default LogoSponsors;