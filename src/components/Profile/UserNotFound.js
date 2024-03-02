import React from "react";
import "src/components/Error404/Error404Container.css";
import { Link } from "react-router-dom";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

export default function UserNotFound() {
  return (
    <div className="error-container">
      <TitleGeneralized size = "big" bold={false} padTop="0%">Aquest usuari no existeix</TitleGeneralized>
      <p className="text">
        La pàgina que estàs buscant no existeix als nostres servidors :({" "}
      </p>
      <Link to="/home">
        <button className="button">Tornar a la pàgina principal</button>
      </Link>
    </div>
  );
}
