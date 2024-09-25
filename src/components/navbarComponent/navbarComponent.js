import { React, useState, useEffect } from "react";

const NavbarComponent = ({
  centerContent,
  endContent,
  bgColor,
  textColor,
  logoimg,
  dropEndContent,
  showCenterContentOnlyOnDrop,
  logoRedirect,
}) => {
  const [navStatus, setNavStatus] = useState(false);
  const [bgColor2, setBgColor2] = useState(bgColor);
  const [navDrop, setNavDrop] = useState(window.innerWidth > 768);

  const changeNavStatus = () => {
    if (navStatus) {
      setNavStatus(false);
    } else {
      setNavStatus(true);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setNavStatus(false);
      setBgColor2("white");
    } else {
      setNavStatus(true);
      setBgColor2(bgColor);
    }
    setNavDrop(window.innerWidth > 768);
  }, [bgColor]);

  useEffect(() => {
    const handleResize = () => {
      setNavDrop(window.innerWidth > 768);

      if (window.innerWidth <= 768) {
        setNavStatus(false);
        setBgColor2("white");
        // Do something when window width is less than or equal to 768
      } else {
        setNavStatus(true);
        setBgColor2(bgColor);
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        // Do something when window width is greater than 768
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [bgColor]);

  return (
    <nav
      className={`flex flex-col md:!sticky md:top-0 md:z-50`}
      style={{ boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2)" }}
    >
      <div
        className={`w-full h-16 px-4 py-2 items-center`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div
          className="md:hidden flex flex-row justify-between mt-0"
          id="header-points"
        >
          <div className="">
            <a href={logoRedirect}>
              <img src={logoimg} alt="logo" className="h-12 w-12 flex-none " />
            </a>
          </div>
          <div className="text-white text-3xl" onClick={changeNavStatus}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {navStatus ? (
          <div
            className="absolute h-[100%] w-screen bg-white z-50 inset-x-0 md:relative appear-animation mt-2 md:mt-3 md:w-full flex"
            id="container-points"
          >
            <div
              className={`flex md:justify-between items-center bg-background-patron h-full w-full md:bg-background-none pb-3`}
              style={{ backgroundColor: bgColor2 }}
            >
              <div className="hidden md:block items-center  ">
                <div className="flex items-center h-full relative">
                  <a href={logoRedirect}>
                    <img src={logoimg} alt="logo" className="h-16" />
                  </a>
                </div>
              </div>
              {(!showCenterContentOnlyOnDrop || !navDrop) &&
                <div
                  className="absolute  md:relative top-0 text-black flex flex-col md:flex-row items-left justify-center w-full gap-y-2 gap-x-10 mt-3 md:mt-0 pl-5 md:ml-0"
                  onClick={changeNavStatus}
                >
                  {centerContent}
                </div>
              }
              <div className="  mt-10 md:mt-0 md:bottom-0 absolute md:relative bottom-0 right-0 mr-4 mb-28 visible md:mr-0 md:mb-0 text-black">
                <div className="block md:hidden md:center align-center">
                  <div className="w-11/12 border-1 border-white" />
                </div>

                <div className="flex justify-end items-center">
                  {navDrop ? endContent : dropEndContent}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
