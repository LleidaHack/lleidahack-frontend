import React from "react";
import HSkeleton from "src/components/hackeps/LoadingSkeleton/HSkeleton";
import logo from "src/icons/hackLogoWellDone.png";

const Join = (props) => {
  function ManageButton() {
    if (!props.event) {
      return <HSkeleton width={"20%"} height={"40px"} inline />;
    }

    if (props.event.accepted) {
      if (props.event.confirmed) {
        return (
          <div
            style={{ width: `fit-content`, textDecoration: `none` }}
            className="py-2 px-4 m-auto p-bg-primary text-textPrimaryHackeps"
          >
            Acceptat!
          </div>
        );
      } else {
        return (
          <div
            style={{ width: `fit-content`, textDecoration: `none` }}
            className="py-2 px-4 m-auto p-bg-primary text-textPrimaryHackeps"
          >
            Confirma el correu
          </div>
        );
      }
    }

    if (props.event.registered) {
      return (
        <div
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-textPrimaryHackeps p-bg-primary"
        >
          Pendent d'acceptació
        </div>
      );
    } else if (props.event.is_open) {
      return (
        <a
          href="/hackeps/inscripcio"
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-textPrimaryHackeps p-bg-primary"
        >
          Inscriure's
        </a>
      );
    } else {
      return (
        <div
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-textPrimaryHackeps p-bg-primary"
        >
          Inscripcions tancades!
        </div>
      );
    }
  }

  return (
    <div className="w-1/5 sm:w-full sm:mt-10 sm:mb-10">
      <div className="w-11/12 my-10 mx-auto bg-gray-100 text-center p-8 sm:p-16">
        <div className="flex justify-center">
          <img className="w-1/2 mx-auto pb-8" src={logo} alt="" />
        </div>
        <div className="mt-4">
          <ManageButton />
        </div>
      </div>
    </div>
  );
};

export default Join;

/*  return (
  <div className="responsive-amongButton">
  <div className="pendentAcceptPC row container-fluid  p-bg-grey text-center m-auto lolospace">
    <div className="col-12 p-bg-grey">
      <div className="row">
        <img className="imgbox" src={logo} alt="" />
      </div>
      <div className="row text-center">
        <ManageButton />
      </div>
    </div>
  </div>
</div> */