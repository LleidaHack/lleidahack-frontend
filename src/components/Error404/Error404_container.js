<<<<<<< HEAD
import React from "react";
import "./Error404_container.css";
import { Link } from "react-router-dom";
=======
import React from 'react'
import 'src/components/Error404/Error404_container.css'
import { Link } from 'react-router-dom';
>>>>>>> 21-svila-inscripcions-equip

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="title">404</h1>
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
