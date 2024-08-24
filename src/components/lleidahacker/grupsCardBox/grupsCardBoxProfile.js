import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GrupsCardBoxProfile = ({
  name,
  role,
  bgcolor,
  opacity,
  image,
  size,
  textColor,
  changeColor,
  click,
}) => {
  const navigate = useNavigate();
  const [hover, enableHover] = useState(false);
  const [sizebox, setSizeBox] = useState("normal");
  const [colorChange, setColorChange] = useState(changeColor);
  const [bagColor, setBgColor] = useState(bgcolor);
  const [clickEvent, setClickEvent] = useState(click);

  useEffect(() => {
    if (opacity == "100") {
      enableHover(true);
    }
  }, [opacity]);

  useEffect(() => {
    setSizeBox(size);
  }, [size]);

  useEffect(() => {
    setClickEvent(click);
  }, [click]);

  function clicked() {
    console.log(click);
    if (click !== undefined && name !== undefined) {
      if (opacity == "100") {
        const url = "/grups/" + (name ?? "").toLowerCase();
        navigate(url);
      }
    }
    if (changeColor === true) {
      if (bagColor === "primaryLanding") {
        setBgColor(bgcolor);
      } else {
        setBgColor("primaryLanding");
      }
    }
  }

  return (
    <div
      className={`select-none flex flex-row items-center align-center bg-${bagColor} rounded-md w-${sizebox === "small" ? "64" : "72"} h-${sizebox === "small" ? "24" : "36"}`}
      style={{ opacity: opacity }}
      onClick={clicked}
    >
      <div
        className={`flex flex-col items-center justify-center  rounded-full bg-white  overflow-hidden ml-2 w-${sizebox === "small" ? "16" : "24"} h-${sizebox === "small" ? "16" : "24"}`}
      >
        <img
          src={image}
          alt={name}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div
        className={`flex flex-col items-left ml-3 text-${textColor !== undefined ? textColor : "white"}`}
      >
        <h1 className="text-2xl font-bold mt-2 mb-0">{name}</h1>
        {name === undefined ? (
          <>
            <p className="mt-0 mr-2">{role}</p>
          </>
        ) : (
          <>
            <p className="mt-0">"{role}"</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GrupsCardBoxProfile;
