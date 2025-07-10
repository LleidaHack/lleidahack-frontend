import React from "react";

const LogoSponsors = ({ image, name, small = false }) => {
  const backgrounds = [
    "bg-background-cartellA",
    "bg-background-cartellB",
    "bg-background-cartellC",
    "bg-background-cartellD"
  ];
  
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  // Canvi de tamany depenent de si es sponsor o patro
  let containerSize, contentSize, imageSize;
  
  if (small) {
    containerSize = "w-44 h-40";
    contentSize = "w-9/12 h-3/12 mt-7 px-2";
    imageSize = "h-22";
  } else {
    containerSize = "w-52 h-48";
    contentSize = "w-9/12 h-3/12 mt-8 px-2";
    imageSize = "h-24";
  }
  
  return (
    <div className={`relative ${containerSize} ${randomBackground} bg-cover items-center justify-center content-center flex`}>   
      {/* Contingut centrat dins el marc marró */}
      <div className={`${contentSize} flex flex-col items-center justify-center`}>
        <img
          src={image}
          alt={name}
          className={`w-full ${imageSize} object-contain`}
        />
      </div>
      {/* <p className="text-xs font-bold text-[#4b2e16] text-center mt-2">
        {name}
      </p> */}
    </div>  
  );
};

export default LogoSponsors;