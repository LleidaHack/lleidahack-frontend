import React from "react";
import "src/components/Error404/Error404_container.css";
import { Link } from "react-router-dom";

export default function UserNotFound() {
  return (
    <div className="error-container">
      <h1 className="title">Aquest usuari no existeix</h1>
      <p className="text">
        La pàgina que estàs buscant no existeix als nostres servidors :({" "}
      </p>
      <Link to="/home">
        <button className="button">Tornar a la pàgina principal</button>
      </Link>
    </div>
  );
}
