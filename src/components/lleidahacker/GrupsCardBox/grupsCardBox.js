import { React, useState, useEffect } from "react";

const GrupsCardBox = ({title, bgImg, url}) => {


  return (
    <div className="w-full min-h-full relative ">
      <div
        className="w-11/12 h-full flex items-center cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 justify-self-center rounded-lg overflow-hidden "
        onClick={() => url && window.location.assign(`/admin${url}`)}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 py-20 text-white px-6 py-6 text-5xl font-bold h-full w-full text-center content-center">
          {title}
        </div>
      </div>
    </div>
  );
};

export default GrupsCardBox;


{/* <div
  onClick={() => url && window.location.assign(url)}
  className="w-full h-full flex items-center cursor-pointer shadow-md transition-shadow duration-200"
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  }}
>
  <div className="bg-black/50 py-20 text-white px-6 py-6 text-2xl font-bold w-full text-left">
    {title}
  </div>
  
</div> */}