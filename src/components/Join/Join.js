import React from "react";
import logo from "src/icons/logo.png";
import { useState, useEffect } from "react";
import HSkeleton from "src/components/others/HSkeleton";

const Join = (props) => {
  const [event, setEvent] = useState(props.event);

  function ManageButton() {
      
    if(!event) {
      return (
        <HSkeleton width={"20%"} height={"40px"} inline />
      );
    }

    if(event.accepted) {
      <a
      href=""
      style={{ width: `fit-content`, textDecoration: `none` }}
      className="py-2 px-4 m-auto text-white p-bg-primary"
    >
      Acceptat!
    </a>
    }

    if(event.registered) {
      <a
      href=""
      style={{ width: `fit-content`, textDecoration: `none` }}
      className="py-2 px-4 m-auto text-white p-bg-primary"
    >
      Registrat!
    </a>
    } else {
      <a
      href="" // Fer put a /eventmanagement/{event_id}/register/{hacker_id}
      style={{ width: `fit-content`, textDecoration: `none` }}
      className="py-2 px-4 m-auto text-white p-bg-primary"
    >
      Inscriure's
    </a>
    }
  }

  return (
    <div className="container m-0 p-0">
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
