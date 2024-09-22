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
  const [bgColor1, setBgColor1] = useState(bgColor);
  const [bgColor2, setBgColor2] = useState(bgColor);
  const [navDrop, setNavDrop] = useState(window.innerWidth > 768);

  const [centerContent1, setCenterContent] = useState(centerContent);
  const [endContent1, setEndContent] = useState(endContent);
  const [dropEndContent1, setDropEndContent] = useState(dropEndContent);
  const [showCenterContentOnlyOnDrop1, setShowCenterContentOnlyOnDrop] =
    useState(showCenterContentOnlyOnDrop);
  const [bgColor4, setBgColor] = useState(bgColor);
  const [textColor1, setTextColor] = useState(textColor);
  const [logoimg1, setLogoimg] = useState(logoimg);
  const [logoRedirect1, setLogoRedirect] = useState(logoRedirect);

  useEffect(() => {
    setCenterContent(centerContent);
    setEndContent(endContent);
    setDropEndContent(dropEndContent);
    setShowCenterContentOnlyOnDrop(showCenterContentOnlyOnDrop);
    setBgColor(bgColor);
    setTextColor(textColor);
    setLogoimg(logoimg);
    setLogoRedirect(logoRedirect);
  }, [centerContent, endContent, dropEndContent, showCenterContentOnlyOnDrop, bgColor, textColor, logoimg, logoRedirect]);



  const changeNavStatus = () => {
    if (navStatus) {
      setNavStatus(false);
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    } else {
      setNavStatus(true);
      document.body.style.overflow = "hidden";
    }
  };
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setNavStatus(false);
      setBgColor2("white");
    } else {
      setNavStatus(true);
      setBgColor2(bgColor4);
    }
    setNavDrop(window.innerWidth > 768);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setNavDrop(window.innerWidth > 768);

      if (window.innerWidth <= 768) {
        setNavStatus(false);
        setBgColor2("white");
        // Do something when window width is less than or equal to 768
      } else {
        setNavStatus(true);
        setBgColor2(bgColor4);
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        // Do something when window width is greater than 768
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const containerPoints = document.getElementById("container-points");

    if (navStatus) {
      containerPoints.style.display = "flex";
    } else {
      containerPoints.style.display = "none";
    }
  }, [navStatus]);

  return (
    <div className={`flex flex-col `}>
      <div
        className={`w-full h-16 px-4 py-2 items-center`}
        style={{ backgroundColor: bgColor1, color: textColor1 }}
      >
        <div
          className="md:hidden flex flex-row justify-between mt-0"
          id="header-points"
        >
          <div className="">
            <a href={logoRedirect1}>
              <img src={logoimg1} alt="logo" className="h-12 w-12 flex-none " />
            </a>
          </div>
          <div className="text-white text-3xl" onClick={changeNavStatus}>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>

        <div
          className="absolute  h-[100%] w-screen bg-white z-50 inset-x-0  md:relative  appear-animation mt-2 md:mt-3   md:w-full"
          id="container-points"
        >
          <div
            className={`flex md:justify-between items-center bg-background-patron h-full w-full md:bg-background-none pb-3`}
            style={{ backgroundColor: bgColor2 }}
          >
            <div className="hidden md:block items-center  ">
              <div className="flex items-center h-full relative">
                <a href={logoRedirect1}>
                  <img src={logoimg1} alt="logo" className="h-16" />
                </a>
              </div>
            </div>
            <div
              className="absolute  md:relative top-0 text-black flex flex-col md:flex-row items-left justify-center w-full gap-y-2 gap-x-10 mt-3 md:mt-0 pl-5 md:ml-0"
              onClick={changeNavStatus}
            >
              {(!showCenterContentOnlyOnDrop1 ||
                (showCenterContentOnlyOnDrop1 && !navDrop)) &&
                centerContent1}
            </div>
            <div className="  mt-10 md:mt-0 md:bottom-0 absolute md:relative bottom-0 right-0 mr-4 mb-28 visible md:mr-0 md:mb-0 text-black">
              <div className="block md:hidden md:center align-center">
                <div className="w-11/12 border-1 border-white" />
              </div>

              <div className="flex justify-end items-center">
                {navDrop ? endContent1 : dropEndContent1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
