import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "src/components/hackeps/Header/Header.css";
import hackIcon from "src/icons/hackIcon.png";
import { me, checkToken } from "src/services/AuthenticationService";
import ProfilePic from "../ProfilePic/ProfilePic";
import Button from "src/components/buttons/Button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const [icon, setUserIcon] = useState("string");
  const [validToken, setValidToken] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("userToken")) {
        const verification = await checkToken();
        if (verification.success) {
          setValidToken(true);
          try {
            if (!localStorage.getItem("imageProfile")) {
              const info = await me();
              if (info.nickname) {
                if (
                  info.image !== null &&
                  info.image !== undefined &&
                  info.image !== ""
                ) {
                  setUserIcon(info.image);
                  localStorage.setItem("imageProfile", info.image);
                }
              }
            } else {
              setUserIcon(localStorage.getItem("imageProfile"));
            }
          } catch (error) {}
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar bg-primaryHackeps navbar-expand-md inherited-top">
        <div className="container">
          <Link to="/#home" className="navbar-brand text-textPrimaryHackeps icono">
            <img src={hackIcon} alt="Icono" className="icono" />
          </Link>

          <div className="order-md-1">
            <Button
              className={`navbar-toggler ${showMenu ? "open" : ""}`}
              primary
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon" />
            </Button>
          </div>

          <div
            className={`navbar-collapse peperse ${
              showMenu ? "show" : ""
            } justify-content-lg-end`}
          >
            <ul className="navbar-nav ml-auto">
              {/*<li className="nav-item">
              <Link to="/#home" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>*/}
              <li className="nav-item">
                <Link to="/#dates" className="nav-link !text-textPrimaryHackeps  " onClick={closeMenu}>
                  Dates
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#sponsors" className="nav-link !text-textPrimaryHackeps " onClick={closeMenu}>
                  Sponsors
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dailyhacks" className="nav-link !text-textPrimaryHackeps " onClick={closeMenu}>
                  Dailyhack
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link !text-textPrimaryHackeps " onClick={closeMenu}>
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacte" className="nav-link !text-textPrimaryHackeps " onClick={closeMenu}>
                  Contacte
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/perfil" className="nav-link !text-textPrimaryHackeps " onClick={closeMenu}>
                  <ProfilePic
                    size="small"
                    icon={icon}
                    validToken={validToken}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {String(process.env.REACT_APP_MAIN) === "0" && (
        <nav
          className="navbar"
          style={{ backgroundColor: "red", fontSize: "1.5em" }}
        >
          <div className="container">
            <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
              Aquesta pàgina és de proves. La pàgina de la HackEPS 2023 és{" "}
              <a
                style={{ color: "var(--primary)" }}
                href="https://www.lleidahack.dev/hackeps"
              >
                https://www.lleidahack.dev/hackeps
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
