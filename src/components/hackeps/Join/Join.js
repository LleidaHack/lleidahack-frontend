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
            className="py-2 px-4 m-auto bg-primaryHackeps text-textPrimaryHackeps"
          >
            Acceptat!
          </div>
        );
      } else {
        return (
          <div
            style={{ width: `fit-content`, textDecoration: `none` }}
            className="py-2 px-4 m-auto bg-primaryHackeps text-textPrimaryHackeps"
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
          className="py-2 px-4 m-auto text-textPrimaryHackeps bg-primaryHackeps"
        >
          Pendent d'acceptació
        </div>
      );
    } else if (props.event.is_open) {
      return (
        <a
          href="/hackeps/inscripcio"
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-textPrimaryHackeps bg-primaryHackeps"
        >
          Inscriure's
        </a>
      );
    } else {
      return (
        <div
          style={{ width: `fit-content`, textDecoration: `none` }}
          className="py-2 px-4 m-auto text-textPrimaryHackeps bg-primaryHackeps"
        >
          Inscripcions tancades!
        </div>
      );
    }
  }

  return (
    <div className="w-full mx-auto md:w-1/5">
      <div className="w-9/10 my-8 md:my-0.5 text-center md:flex md:flex-wrap md:justify-between container mx-auto px-6 py-14 md:py-10 bg-grayStrongHackeps">
        <div className="w-full bg-grayStrongHackeps">
          <div className="w-full px-2.5">
            <img className="w-full m-auto pb-8" src={logo} alt="" />
          </div>
          <div className="flex justify-center m-auto">
            <ManageButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
