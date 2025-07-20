import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import hackIcon from "src/icons/hackIconBig.png";
import { me, checkToken } from "src/services/AuthenticationService";
import ProfilePic from "../ProfilePic/ProfilePic";
import NavbarComponent from "src/components/navbarComponent/navbarComponent";

const Header = () => {
  const [centerContent, setCenterContent] = useState(<></>);
  const [endContent, setEndContent] = useState(<></>);
  const [dropEndContent, setDropEndContent] = useState(<></>);

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
        <li className="mr-[4vw] list-none text-xl">
          <Link
            to="/#dates"
            className="text-20 no-underline transition-colors duration-300 font-bold  !text-textPrimaryHackeps  "
          >
            Dates
          </Link>
        </li>
        <li className="mr-[4vw] list-none text-xl">
          <Link
            to="/#sponsors"
            className="text-20 no-underline transition-colors duration-300 font-bold  !text-textPrimaryHackeps  "
          >
            Sponsors
          </Link>
        </li>
        <li className="mr-[4vw] list-none text-xl">
          <Link
            to="/faq"
            className="text-20 no-underline transition-colors duration-300 font-bold  !text-textPrimaryHackeps  "
          >
            FAQ
          </Link>
        </li>
        <li className="mr-[4vw] list-none text-xl">
          <Link
            to="/contacte"
            className="text-20 no-underline transition-colors duration-300 font-bold  !text-textPrimaryHackeps  "
          >
            Contacte
          </Link>
        </li>
        <li className="mr-[4vw] list-none text-xl w-10">
          <Link
            to="/perfil"
            className="text-20 no-underline transition-colors duration-300 font-bold  !text-textPrimaryHackeps  "
          >
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
    if (process.env.REACT_APP_DEBUG === "true") console.log("updated header");
  }, [icon, validToken]);

  return (
    <div data-testid="headerHackeps">
      <NavbarComponent
        bgColor={"#0e3a29"}
        textColor={"white"}
        logoimg={hackIcon}
        centerContent={centerContent}
        endContent={endContent}
        dropEndContent={dropEndContent}
        showCenterContentOnlyOnDrop={true}
        logoRedirect={"/hackeps"}
      />

      {String(process.env.REACT_APP_MAIN) === "0" && (
        <nav
          className="py-2 shadow-md sticky top-0 z-[100]"
          style={{ backgroundColor: "red", fontSize: "1.5em" }}
        >
          <div className="ml-0 mr-0 max-w-full">
            <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
              Aquesta pàgina és de proves. La pàgina de la HackEPS 2024 és{" "}
              <a
                className="primaryHackeps"
                href="https://www.lleidahack.dev/hackeps"
              >
                https://www.lleidahack.dev/hackeps
              </a>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
