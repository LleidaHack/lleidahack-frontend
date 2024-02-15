import React from "react";
import HSkeleton from "src/components/others/HSkeleton";
import logo from "src/icons/hackLogoWellDone.png";
import "src/components/Join/Join.css";

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
    <div style={{width: '50%'}}>
      <div className="row container-fluid  p-bg-grey text-center m-auto lolospace" style={{ width: '80%', marginTop: '5%', marginBottom: '10%'}}>
        <div className="col-12 p-bg-grey">
          <div className="row">
            <img className="imgbox" src={logo} alt="" />
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
