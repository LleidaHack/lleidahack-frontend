import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Importa el archivo de estilos CSS para el header
import hackIcon from '../../icons/hackIcon.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top">
    <div className="container">
      {/* Icono a la izquierda */}
      <Link to="/" className="navbar-brand icono">
        <img src={hackIcon} alt="Icono" className="icono" />
      </Link>

      <div className="order-md-1">
        <button
          className={`navbar-toggler ${showMenu ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className={`collapse navbar-collapse ${showMenu ? "show" : ""} justify-content-lg-end`}>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dates" className="nav-link" onClick={closeMenu}>
                Dates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sponsors" className="nav-link" onClick={closeMenu}>
                Sponsors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacte" className="nav-link" onClick={closeMenu}>
                Contacte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
