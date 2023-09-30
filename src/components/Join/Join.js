import React from "react";
import { useState, useEffect } from "react";
import HSkeleton from "src/components/others/HSkeleton";
import logo from "src/icons/hackLogoWellDone.png";

const Join = (props) => {
  function ManageButton() {
    if (!props.event) {
      return <HSkeleton width={"20%"} height={"40px"} inline />;
    }

    if (props.event.accepted) {
      return (
        <div
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-dark p-bg-primary"
        >
          Acceptat!
        </div>
      );
    }

    if (props.event.registered) {
      return (
        <div
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-dark p-bg-primary"
        >
          Pendent d'acceptació
        </div>
      );
    } else {
      return (
        <a
          href="/hackeps/inscripcio"
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-dark p-bg-primary"
        >
          Inscriure's
        </a>
      );
    }
  }

  return (
    <div className="container-fluid m-0 p-0">
      <div className="row join-container p-bg-grey p-5 text-center m-auto mt-5">
        <div className="col-12 p-bg-grey">
          <div className="row">
            <img className="p-5" src={logo} alt="" />
          </div>
          <div className="row text-center">
            <ManageButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
