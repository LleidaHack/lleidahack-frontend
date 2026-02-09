import logoLleidaHack from "../../../icons/isotip_lleidahack_blanc.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarComponent from "src/components/navbarComponent/navbarComponent";

// Remarcar a la pagina on ets, quan tinguem les urls definitives caldra canviar-ho
// Falta implementar els coponentes dels botons que falten
// Falta implementar el responsive
const Navbar = () => {
  const location = useLocation();
  const iconColor = "#F7F7F7";
  const [centerContent, setCenterContent] = useState(<></>);
  const [endContent, setEndContent] = useState(<></>);
  const [dropEndContent, setDropEndContent] = useState(<></>);

  useEffect(() => {
    setCenterContent(
      <>
        <div className=" text-xl list-none	md:text-white">
          <a
            href="/hackeps"
            className={`no-underline text-CTALanding hover:text-secondaryLanding  duration-300 ${location.pathname === "/hackeps" ? "font-bold" : ""}`}
          >
            <p className="md:text-white">HackEPS</p>
          </a>
        </div>
        <div className=" text-xl list-none	">
          <a
            href="/lleidahack/events"
            className="no-underline text-CTALanding hover:text-secondaryLanding duration-300  md:text-white"
          >
            <p className="md:text-white">Events</p>
          </a>
        </div>
        <div className="text-xl list-none	">
          <a
            href="/lleidahack/noticies"
            className={`no-underline text-CTALanding hover:text-secondaryLanding md:text-white duration-300 ${location.pathname === "/lleidahack/noticies" ? "font-bold" : ""}`}
          >
            <p className="md:text-white">Noticies</p>
          </a>
        </div>
        <div className="text-xl list-none	">
          <a
            href="/lleidahack/contacte"
            className={`no-underline text-CTALanding hover:text-secondaryLanding md:text-white duration-300 ${location.pathname === "/contact" ? "font-bold" : ""}`}
          >
            <p className="md:text-white">Contacte</p>
          </a>
        </div>
        <div className="text-xl list-none	">
          <a
            href="/lleidahack/qui-som"
            className={`no-underline text-CTALanding hover:text-secondaryLanding md:text-white duration-300 ${location.pathname === "/lleidahack/qui-som" ? "font-bold" : ""}`}
          >
            <p className="md:text-white">Qui som?</p>
          </a>
        </div>
      </>,
    );

    setEndContent(
      <>
        <button className="bg-transparent text-xl p-0 mx-2 text-CTALanding">
          <svg
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.16 31.74L29.18 15.02C28.76 13.92 27.82 13.24 26.74 13.24C25.66 13.24 24.74 13.92 24.28 15.06L18.32 31.74C18.04 32.52 18.44 33.38 19.22 33.66C20 33.94 20.86 33.54 21.14 32.76L22.38 29.3H31.08L32.32 32.76C32.54 33.38 33.12 33.76 33.74 33.76C33.9 33.76 34.08 33.74 34.24 33.68C35.02 33.4 35.42 32.54 35.14 31.76L35.16 31.74ZM23.48 26.28L26.76 17.1L30.04 26.28H23.48ZM18.38 8.70001C13.86 15.84 9.77999 20.16 4.81999 23.04C4.57999 23.18 4.31999 23.24 4.07999 23.24C3.55999 23.24 3.05999 22.98 2.77999 22.5C2.35999 21.78 2.59999 20.86 3.31999 20.46C7.51997 18.02 10.96 14.52 14.82 8.72001H2.23999C1.41999 8.72001 0.73999 8.04001 0.73999 7.22001C0.73999 6.40001 1.41999 5.72001 2.23999 5.72001H9.73999V1.76001C9.73999 0.94001 10.42 0.26001 11.24 0.26001C12.06 0.26001 12.74 0.94001 12.74 1.76001V5.72001H20.24C21.06 5.72001 21.74 6.40001 21.74 7.22001C21.74 8.04001 21.06 8.72001 20.24 8.72001H18.36L18.38 8.70001ZM18.46 23.24C18.2 23.24 17.94 23.18 17.7 23.04C16.4 22.28 15.14 21.44 13.96 20.56C13.3 20.06 13.16 19.12 13.66 18.46C14.16 17.8 15.1 17.66 15.76 18.16C16.84 18.98 18.02 19.74 19.22 20.44C19.94 20.86 20.18 21.78 19.76 22.5C19.48 22.98 18.98 23.24 18.46 23.24Z"
              fill={iconColor}
            />
          </svg>
        </button>
      </>,
    );

    setDropEndContent(
      <>
        <button className="bg-transparent text-xl p-0 mx-2 text-CTALanding">
          <svg
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.16 31.74L29.18 15.02C28.76 13.92 27.82 13.24 26.74 13.24C25.66 13.24 24.74 13.92 24.28 15.06L18.32 31.74C18.04 32.52 18.44 33.38 19.22 33.66C20 33.94 20.86 33.54 21.14 32.76L22.38 29.3H31.08L32.32 32.76C32.54 33.38 33.12 33.76 33.74 33.76C33.9 33.76 34.08 33.74 34.24 33.68C35.02 33.4 35.42 32.54 35.14 31.76L35.16 31.74ZM23.48 26.28L26.76 17.1L30.04 26.28H23.48ZM18.38 8.70001C13.86 15.84 9.77999 20.16 4.81999 23.04C4.57999 23.18 4.31999 23.24 4.07999 23.24C3.55999 23.24 3.05999 22.98 2.77999 22.5C2.35999 21.78 2.59999 20.86 3.31999 20.46C7.51997 18.02 10.96 14.52 14.82 8.72001H2.23999C1.41999 8.72001 0.73999 8.04001 0.73999 7.22001C0.73999 6.40001 1.41999 5.72001 2.23999 5.72001H9.73999V1.76001C9.73999 0.94001 10.42 0.26001 11.24 0.26001C12.06 0.26001 12.74 0.94001 12.74 1.76001V5.72001H20.24C21.06 5.72001 21.74 6.40001 21.74 7.22001C21.74 8.04001 21.06 8.72001 20.24 8.72001H18.36L18.38 8.70001ZM18.46 23.24C18.2 23.24 17.94 23.18 17.7 23.04C16.4 22.28 15.14 21.44 13.96 20.56C13.3 20.06 13.16 19.12 13.66 18.46C14.16 17.8 15.1 17.66 15.76 18.16C16.84 18.98 18.02 19.74 19.22 20.44C19.94 20.86 20.18 21.78 19.76 22.5C19.48 22.98 18.98 23.24 18.46 23.24Z"
              fill={iconColor}
            />
          </svg>
        </button>
      </>,
    );
  }, [location.pathname]);

  return (
    <>
      <NavbarComponent
        bgColor={"#FF7430"}
        textColor={"white"}
        logoimg={logoLleidaHack}
        centerContent={centerContent}
        endContent={endContent}
        dropEndContent={dropEndContent}
        showCenterContentOnlyOnDrop={false}
        logoRedirect={"/lleidahack"}
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
export default Navbar;
