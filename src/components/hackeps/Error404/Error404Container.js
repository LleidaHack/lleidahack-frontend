import React from "react";
import "src/components/hackeps/Error404/Error404Container.css";
import { Link } from "react-router-dom";
import TitleGeneralized from "../TitleGeneralized/TitleGeneralized";
import Button from "src/components/buttons/Button";

const Error404 = () => {
  return (
    <div className="error-container">
      <TitleGeneralized size={"big"} bold={false}>
        404
      </TitleGeneralized>
      <p className="text">
        La pàgina que estàs buscant no existeix als nostres servidors :{" "}
      </p>
      <Link to="/home">
        <Button primary className="py-3">
          Tornar a la pàgina principal
        </Button>
      </Link>
    </div>
  );
};

export default Error404;
