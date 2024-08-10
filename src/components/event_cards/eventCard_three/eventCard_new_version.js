import React from "react";
import "src/components/event_cards/eventCard_three/eventCard_three.css";

const EvemtCardNewVersion = ({image }) => {
  return (
    <div className=" ">
      <img
        src={image}
        className="bg-[${image}] h-[30.875rem] object-cover  "
      ></img>

      
    </div>
  );
};

export default EvemtCardNewVersion;
