import React, { useEffect, useState } from "react";

const GrupsCardBox = ({ title, bgImg, url, small = false }) => {
  const [classWidth, setClassWidth] = useState("w-11/12");
  const [classHeight, setClassHeight] = useState("h-full");
  const [sizeText, setSizeText] = useState("text-4xl");
  useEffect(() => {
    if (small) {
      setClassWidth("w-10/12");
      setClassHeight("h-64");
      setSizeText("text-2xl");
    }
  }, [small]);

  return (
    <div className="w-full min-h-full relative ">
      <div
        className={`${classWidth} ${classHeight} flex items-center cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 justify-self-center rounded-lg overflow-hidden `}
        onClick={() => url && window.location.assign(`/admin${url}`)}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`bg-black/50 py-6 text-white px-6 ${sizeText} font-bold h-full w-full text-center content-center`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default GrupsCardBox;
