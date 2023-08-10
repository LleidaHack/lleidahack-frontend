import React from "react";
import logo from "../../icons/logo.png";

const Join = () => {

  return (<div className="container container m-0 p-0">
    <div className="row join-container p-bg-grey p-5 text-center m-auto mt-5">
      <div className="col-12 p-bg-grey">
        <div className="row">
          <img className="p-5" src={logo} alt="" />
        </div>
        <div className="row text-center">
          <a
            href=""
            style={{ width: `fit-content`, textDecoration: `none` }}
            className="py-2 px-4 m-auto text-white p-bg-red"
          >
            Uneix-te
          </a>
        </div>
      </div>
    </div>
  </div>);
};

export default Join;