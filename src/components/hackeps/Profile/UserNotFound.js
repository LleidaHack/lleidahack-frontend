import React from "react";
import { Link } from "react-router-dom";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import Button from "src/components/buttons/Button";

export default function UserNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <TitleGeneralized big padTop="0" className="mt-48">
        Aquest usuari no existeix
      </TitleGeneralized>
      <p className="text-2xl justify-center text-center">
        La pàgina que estàs buscant no existeix als nostres servidors
      </p>
      <Link to="/home">
        <Button primary>Tornar a la pàgina principal</Button>
      </Link>
    </div>
  );
}
