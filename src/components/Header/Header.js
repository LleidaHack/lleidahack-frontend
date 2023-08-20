import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "src/components/Header/Header.css"; 
import hackIcon from 'src/icons/hack_icon_black.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar navbar-expand-md inherited-top">
      <div className="container">
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

        <div
          className={`collapse navbar-collapse ${
            showMenu ? "show" : ""
          } justify-content-lg-end`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/#home" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#dates" className="nav-link" onClick={closeMenu}>
                Dates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#sponsors" className="nav-link" onClick={closeMenu}>
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
            <li className="nav-item">
              <Link to="/perfil" className="nav-link" onClick={closeMenu}>
                El meu perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
