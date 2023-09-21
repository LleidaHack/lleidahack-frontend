import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "src/components/Header/Header.css";
import hackIcon from "src/icons/hack_icon_black.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  let dailyhackss = "";
  const pages = [
    ["Home", "/#home"],
    ["Dates", "/#dates"],
    ["Sponsors", "/#sponsors"],
    ["FAQ", "/faq"],
    ["Contacte", "/contacte"],
  ];

  if (localStorage.getItem("userToken")) {
    pages.push(["Dailyhack", "/dailyhacks"]);
    pages.push(["El meu perfil", "/perfil"]);
  }

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
            <span className="navbar-toggler-icon" />
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${
            showMenu ? "show" : ""
          } justify-content-lg-end`}
        >
          <ul className="navbar-nav ml-auto">
            {pages.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={item[1]} className="nav-link" onClick={closeMenu}>
                  {item[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
