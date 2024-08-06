import React from "react";

const Error404 = () => {
  return (
    <div className="error-container">
      <p className="text">
        lluc puta La pàgina que estàs buscant no existeix als servidors :{" "}
      </p>
      <Link to="/home">
        <button className="button">Tornar a la pàgina principal</button>
      </Link>
    </div>
  );
};

export default Error404;
