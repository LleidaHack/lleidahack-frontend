import React from "react";
import { Link } from "react-router-dom";
import ButtonLleidahack from "src/components/buttons/ButtonLleidahack";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center	items-center gap-4 py-24 px-[10%]">
      <h1 className="text-7xl font-bold text-secondaryLanding">404</h1>
      <p className="text-2xl text-black justify-center text-center">
        La pàgina que estàs buscant no existeix als nostres servidors :({" "}
      </p>
      <Link to="/home">
        <ButtonLleidahack primary className="py-3">
          Tornar a la pàgina principal
        </ButtonLleidahack>
      </Link>
    </div>
  );
};

export default Error404;
