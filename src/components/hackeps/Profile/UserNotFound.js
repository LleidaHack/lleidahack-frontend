import React from "react";
import "src/components/hackeps/Error404/Error404Container.css";
import { Link } from "react-router-dom";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import Button from "src/components/buttons/Button";

export default function UserNotFound() {
  return (
    <div className="error-container">
      <TitleGeneralized size="big" bold={false} padTop="0%">
        Aquest usuari no existeix
      </TitleGeneralized>
      <p className="text">
        La pàgina que estàs buscant no existeix als nostres servidors
      </p>
      <Link to="/home">
        <Button primary>Tornar a la pàgina principal</Button>
      </Link>
    </div>
  );
}
