import React from "react";
import { useState } from "react";

const SwitchView = ({ text1, text2, activity1, activity2 }) => {
  const [isComplete, setIsComplete] = useState(true);

  return (
    <div className="bg-black rounded-full w-[14.3rem] h-[3.3rem]  items-center flex justify-center select-none	">
      <div className="relative w-56 h-12 bg-black rounded-full flex overflow-hidden  cursor-pointer">
        {/* Sección "Complete" con recorte diagonal */}
        <div
          className={`relative flex-1 flex items-center justify-center text-black text-sm transition-all ${
            isComplete ? "bg-primaryLanding" : "bg-gray-100"
          } `}
          style={{
            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
          }}
          onClick={() => {
            setIsComplete(true);
            activity1();
          }}
        >
          {text1}
        </div>

        {/* Sección "Reduced" con recorte diagonal */}
        <div
          className={`relative flex-1 flex items-center justify-center text-black text-sm transition-all ${
            !isComplete ? "bg-primaryLanding" : "bg-gray-100"
          } `}
          style={{
            clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          onClick={() => {
            setIsComplete(false);
            activity2();
          }}
        >
          {text2}
        </div>
      </div>
    </div>
  );
};

export default SwitchView;
