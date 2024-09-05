import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GrupsCardBox = ({
  name,
  role,
  bgcolor,
  opacity,
  image,
  whatsapp,
  drive,
}) => {
  const [hover, enableHover] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (opacity == "100") {
      enableHover(true);
    }
  }, [opacity]);

  function clicked() {
    if (opacity == "100") {
      const url = "/grups/" + name.toLowerCase();
      navigate(url);
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-center bg-${bgcolor} rounded-md w-72 scale-90	`}
      style={{ opacity: opacity }}
      onClick={clicked}
    >
      <div className="flex flex-col items-center justify-center mt-4 rounded-full bg-red-500 w-[13rem] h-[13rem] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mt-2 mb-0">{name}</h1>
        <p className="mt-0">{role}</p>
      </div>
      <div className="flex flex-row items-center justify-between w-5/12 mb-10 text-center">
        <div>
          <a href={drive} target="_blank" className="text-black text-4xl">
            <i class="fa-brands fa-google-drive"></i>
          </a>
        </div>
        <div>
          <a href={whatsapp} target="_blank" className="text-black text-4xl ">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GrupsCardBox;
