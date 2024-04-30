import React from "react";
import "src/components/Error404/Error404Container.css";
import { Link } from "react-router-dom";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";

const Error404 = () => {
  return (
    <div className="error-container">
      <TitleGeneralized size={"big"} bold={false}>
        404
      </TitleGeneralized>
      <p className="text">
        La pàgina que estàs buscant no existeix als nostres servidors :({" "}
      </p>
      <Link to="/home">
        <button className="button">Tornar a la pàgina principal</button>
      </Link>
    </div>
  );
};

export default Error404;
