import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "src/components/hackeps/Header/Header.css";
import hackIcon from "src/icons/hackIconBig.png";
import { me, checkToken } from "src/services/AuthenticationService";
import ProfilePic from "../ProfilePic/ProfilePic";
import Button from "src/components/buttons/Button";
import NavbarComponent from "src/components/navbarComponent/navbarComponent";

const Header = () => {
  const [centerContent, setCenterContent] = useState(<></>);
  const [endContent, setEndContent] = useState(<></>);
  const [dropEndContent, setDropEndContent] = useState(<></>);
  const [logoRed, setLogoRed] = useState("/hackeps");
  const [icon, setUserIcon] = useState("");
  const [validToken, setValidToken] = useState(false);
  localStorage.setItem("validToken", false);

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("userToken")) {
        const verification = await checkToken();

        if (verification.success) {
          setValidToken(true);
          localStorage.setItem("validToken", true);

          try {
            if (!localStorage.getItem("imageProfile")) {
              const info = await me();
              if (info.nickname) {
                if (
                  info.image !== null ||
                  info.image !== undefined ||
                  info.image !== "" ||
                  info.image !== "string"
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
    setEndContent(
      <>
        <li className="nav-item list-none text-xl">
          <Link to="/#dates" className="nav-link !text-textPrimaryHackeps  ">
            Dates
          </Link>
        </li>
        <li className="nav-item list-none text-xl">
          <Link to="/#sponsors" className="nav-link !text-textPrimaryHackeps ">
            Sponsors
          </Link>
        </li>
        <li className="nav-item list-none text-xl">
          <Link to="/faq" className="nav-link !text-textPrimaryHackeps ">
            FAQ
          </Link>
        </li>
        <li className="nav-item list-none text-xl">
          <Link to="/contacte" className="nav-link !text-textPrimaryHackeps ">
            Contacte
          </Link>
        </li>
        <li className="nav-item list-none text-xl w-10">
          <Link to="/perfil" className="nav-link !text-textPrimaryHackeps ">
            <ProfilePic size="small" icon={icon} validToken={validToken} />
          </Link>
        </li>
      </>,
    );
    setCenterContent(
      <>
        <li className=" list-none">
          <Link
            to="/#dates"
            className="text-xl list-none no-underline text-black"
          >
            <p>Dates</p>
          </Link>
        </li>
        <li className=" list-none no-underline">
          <Link
            to="/#sponsors"
            className="text-xl list-none no-underline text-black"
          >
            <p>Sponsors</p>
          </Link>
        </li>
        <li className="list-none">
          <Link to="/faq" className="text-xl list-none no-underline text-black">
            <p>FAQ</p>
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="/contacte"
            className="text-xl list-none no-underline text-black"
          >
            <p>Contacte</p>
          </Link>
        </li>
      </>,
    );
    setDropEndContent(
      <>
        <li className="list-none">
          <Link
            to="/perfil"
            className="text-xl list-none no-underline text-black"
          >
            <ProfilePic size="small" icon={icon} validToken={validToken} />
          </Link>
        </li>
      </>,
    );
  }, []);

  useEffect(() => {
    setDropEndContent(
      <>
        <li className="list-none">
          <Link
            to="/perfil"
            className="text-xl list-none no-underline text-black"
          >
            <ProfilePic size="small" icon={icon} validToken={validToken} />
          </Link>
        </li>
      </>,
    );
    if (process.env.REACT_APP_DEBUG==="true")
      console.log("updated header");
  }, [icon, validToken]);

  return (
    <>
      <NavbarComponent
        bgColor={"#0e3a29"}
        textColor={"white"}
        logoimg={hackIcon}
        centerContent={centerContent}
        endContent={endContent}
        dropEndContent={dropEndContent}
        showCenterContentOnlyOnDrop={true}
        logoRedirect={logoRed}
      />

      {String(process.env.REACT_APP_MAIN) === "0" && (
        <nav
          className="navbar"
          style={{ backgroundColor: "red", fontSize: "1.5em" }}
        >
          <div className="container">
            <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
              Aquesta pàgina és de proves. La pàgina de la HackEPS 2024 és{" "}
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
