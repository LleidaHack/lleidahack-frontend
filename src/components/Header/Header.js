import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "src/components/Header/Header.css";
import hackIcon from "src/icons/hack_icon_black.png";
import { me } from "src/services/AuthenticationService";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

function togglePopup() {
  const popup = document.getElementById('popupp');
  if (popup.classList.contains('active')) {
    popup.classList.remove('active');
  } else {
    popup.classList.add('active');
  }
}
  
  function logOut() {
    localStorage.clear()
    Navigate("/")
  }
  
 

  let dailyhackss = "";

  if (localStorage.getItem("userToken")) {
    dailyhackss = [
      <li className="nav-item">
        <Link to="/dailyhacks" className="nav-link" onClick={closeMenu}>
          {" "}
          Dailyhack
        </Link>
      </li>,
    ];
  }

  let imageProfileUrl = "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
  let nickname = "ewfwef"
  
  const [icon, setUserIcon] = useState(null);
  const [username, writeUserName] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await me()
        if(info.nickname){  //Si te nickname vol dir que la obtencio de dades es posible i que tambe hi haurá imatge
          writeUserName(info.nickname)
          setUserIcon(info.image)
          
        }
      } catch (error) {
        console.log("El error obtenido es:", error);
      }
    };

    fetchData();
  }, []);




  return (
    <>
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
            {dailyhackss}

            {localStorage.getItem("userToken") ? (
              <li className="nav-item" >
                <Link to="" className="nav-link" onClick={togglePopup}>
                <div className="profileImage2">
                <img className="Profile2" src={icon}></img>
            </div>
                </Link>
                  
              </li>
            ) : (  //Aixo es quan no existeix sesió
              <li className="nav-item" >
                <Link to="" className="nav-link" onClick={togglePopup}>
                <i class="fa-solid fa-user"></i>
                </Link>
                </li>
            )}
          </ul>
        </div>
      </div>

      
    </nav>
    <div id="popupp" className="popup-contenter">
        <div className="popup-options">
          {localStorage.getItem("userToken") ? (
            <>
            <div className="InfoProfile">
              <div className="profileImage">
                <img className="Profile" src={icon}></img>
              </div>
              <p className="title3">{username}</p>
            </div>
            <div className="buttonsFlex">
              <Link to="/perfil" className="py-2 px-4 m-auto apuntat-buttonex">
                El meu perfil
              </Link>
            </div>
            <br></br>
            <Link to="/" className="logOut" onClick={logOut}>
              <p> <i class="fa-solid fa-door-open" ></i> Surt de la sesió</p>
            </Link>
            </>

          ) : (
            
            <>
            <div className="InfoProfile">
             
              <p className="title3">El meu perfil</p>
            </div>
            
            <div className="buttonsFlex">
              <Link to="/login" className="py-2 px-4 m-auto apuntat-buttonex">
                Inicia sesió
              </Link>

              <Link to="/entrance" className="py-2 px-4 m-auto apuntat-buttonex">
                Crear compte  {/*Aquesta porta a user-enter */}
              </Link>
            </div>
            <br></br>
            
            
            </>

          )}

        </div>
      </div>
      </>
    
  );
};

export default Header;
