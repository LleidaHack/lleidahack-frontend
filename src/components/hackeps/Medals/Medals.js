import React from "react";
import medal from "src/icons/medal_example.png";

const Medals = () => {
  return (
    <div className="container w-100 bg-primaryHackeps p-4 pb-5">
      <h2>Medalles</h2>
      <div className="container mt-2 text-center m-0">
        <div className="row m-auto">
          <div className="col-4 mt-2 text-center ">
            <img className=" m-auto" src={medal} alt="" />
          </div>
          <div className="col-4 mt-2 text-center ">
            <img className=" m-auto" src={medal} alt="" />
          </div>
          <div className="col-4 mt-2 text-center ">
            <img className=" m-auto" src={medal} alt="" />
          </div>
          <div className="col-4 mt-2 text-center ">
            <img className=" m-auto" src={medal} alt="" />
          </div>
          <div className="col-4 mt-2 text-center ">
            <img className=" m-auto" src={medal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medals;
