import { React, useEffect, useRef, useState } from "react";
import hackLogo from "src/icons/banner_home_icon.png";
import profiles from "./Profiles";
import "./Waiting.css";
import "./elements.css";
import CounterActivity from "./CounterActivity";
import Button from "src/components/buttons/Button";
import camaleon from "src/assets/camaleon.gif";
import LogosComp from "./LogosComp";
import AdsContainer from "./AdsContainer";
import CarruselLogos from "./CarruselLogos";
import activities from "./ActivityList";
import ProfileTiming from "./ProfileTiming";

const WaitingComponent = () => {
  const logoRef = useRef(null);
  const [profile, setProfiles] = useState("Hacking");

  const setProfile = (newProfile) => {
    // Funció per a que al setejar un perfil nou, es realitzi tota la interacció de canvis entre perfils.
    transitionBackgrounds(newProfile);
    setProfiles(newProfile);
    transitionChangeContent(
      profiles[newProfile].content.content,
      profiles[newProfile].content.heightContent,
      profiles[newProfile].content.heightFooter,
    );
  };

  const [heightContent, setHeightContent] = useState(`h-72`);
  const [heightFooter, setHeightFooter] = useState(`h-28`);
  const targetTime = new Date("2024-11-24T11:00:00").getTime();
  const [adviceElement, setAdviceElement] = useState();
  const [activeActivity, setActiveActivity] = useState("none");
  const [content, setContent] = useState(
    <div className="text-center">
      <p>Waiting for the activity to Start</p>
      <CounterActivity type={2} targetTime={targetTime} />
    </div>,
  );
  const [footer, setFooter] = useState(
    <div className="w-full align-end">
      {" "}
      <LogosComp />{" "}
    </div>,
  );

  const animateLogo = () => {
    const logo = logoRef.current;
    logo.classList.remove("animate"); // Reinicia la animación
    void logo.offsetWidth; // Fuerza el reflujo para reiniciar la animación
    logo.classList.add("animate"); // Añade la clase de animación
  };

  useEffect(() => {
    animateLogo(); //Animación del logo
  }, []);

  useEffect(() => {
    const updateProfile = () => {
      const now = new Date().getTime();
      let currentProfile = ProfileTiming[0].profile;
      let nextProfileTime = Infinity;
      let oldProfile = 0;
      ProfileTiming.forEach((profile) => {
        const profileTime = new Date(profile.date).getTime();
        if (profileTime <= now && profileTime > oldProfile) {
          currentProfile = profile.profile;
          oldProfile = profileTime;
        }
        if (profileTime > now && profileTime < nextProfileTime) {
          nextProfileTime = profileTime;
        }
      });

      setProfile(currentProfile);
    };

    updateProfile(); // Execute first time on open window

    const interval = setInterval(updateProfile, 300000); // 300000 milliseconds = 5 minutes

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [setProfile]);

  useEffect(() => {
    const checkActivityTime = () => {
      const now = new Date().getTime();
      const time2Advice = 20; // 20 minutes
      const upcomingActivity = activities.find((activity) => {
        const activityTime = new Date(activity.date).getTime();

        return (
          activityTime - now <= time2Advice * 60 * 1000 &&
          activityTime - now > 0
        );
      });

      if (
        activeActivity &&
        upcomingActivity &&
        new Date(upcomingActivity.endTime).getTime() <= now
      ) {
        setAdviceElement(null);
        setActiveActivity("none");
      }
      if (activeActivity !== upcomingActivity?.title) {
        if (upcomingActivity) {
          setAdviceElement(
            <AdsContainer
              color="bg-green-500"
              title={upcomingActivity.title}
              element1={upcomingActivity.description}
              element2={
                <CounterActivity
                  type={1}
                  targetTime={new Date(upcomingActivity.date).getTime()}
                />
              }
              key={upcomingActivity.title}
            />,
          );
          setActiveActivity(upcomingActivity.title);
        }
      }
    };

    checkActivityTime(); // Execute first time on open window

    const interval = setInterval(checkActivityTime, 120000); // 120000 milliseconds = 2 minutes

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [activeActivity]);

  function transitionBackgrounds(nextProfile) {
    const mainDiv = document.querySelector(".mainDiv");
    var bg1 = window.getComputedStyle(mainDiv).backgroundColor; // Actual background on screen
    if (bg1.startsWith("rgba")) {
      const rgba = bg1.match(/rgba\((\d+), (\d+), (\d+), (\d+)\)/);
      if (rgba) {
        bg1 = `#${((1 << 24) + (parseInt(rgba[1]) << 16) + (parseInt(rgba[2]) << 8) + parseInt(rgba[3])).toString(16).slice(1)}`;
      }
    }
    if (bg1.startsWith("rgb")) {
      const rgb = parseRgb(bg1);
      bg1 = `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)}`;
    }
    bg1 = bg1.trim();
    const bg2 = profiles[nextProfile]?.bgColor?.trim();
    if (!/^#[0-9A-Fa-f]{6}$/.test(bg1) || !/^#[0-9A-Fa-f]{6}$/.test(bg2)) {
      return;
    }
    const step = 0.1;
    let opacity = 0;
    let interval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(interval);
        setProfiles(nextProfile); // Actualizar el perfil al finalizar
      } else {
        opacity += step;

        // Calcular los valores RGB mezclados
        const r = Math.round(
          parseInt(bg1.slice(1, 3), 16) * (1 - opacity) +
            parseInt(bg2.slice(1, 3), 16) * opacity,
        );
        const g = Math.round(
          parseInt(bg1.slice(3, 5), 16) * (1 - opacity) +
            parseInt(bg2.slice(3, 5), 16) * opacity,
        );
        const b = Math.round(
          parseInt(bg1.slice(5, 7), 16) * (1 - opacity) +
            parseInt(bg2.slice(5, 7), 16) * opacity,
        );

        // Aplicar estilo al elemento
        mainDiv.style.transition = `background-color 0.1s ease-in-out`;
        mainDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    }, 100);
  }
  function parseRgb(rgbString) {
    const match = rgbString.match(/rgb\((\d+), (\d+), (\d+)\)/);
    if (!match) throw new Error("El color RGB no es válido.");
    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
    };
  }

  function hexToRgb(hex) {
    // Asegurarse de que el formato HEX sea correcto
    if (hex.length === 9) {
      // RGBA (8 caracteres)
      hex = hex.slice(0, 7); // Convertir a formato HEX estándar (#RRGGBB)
    } else if (hex.length !== 7) {
      throw new Error("El color HEX no es válido.");
    }
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }
  function transitionChangeContent(contents, hContent, hFooter) {
    //La utilitat de aquesta funció sera per a transicio entre canvis del content (zona del rellotge central)
    //Els canvis poden ser: (Modo nit(colors diferents), modo fi de la hack (instruccions de entrega))
    const div = document.querySelector(".container4Content");
    const bg = contents.bgColor;
    const textC = contents.textColor;
    const step = 0.1;
    let opacity = 0;
    const interval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(interval);
      } else {
        opacity += step;

        const bgRgb = hexToRgb(bg);
        const currentBgRgb = parseRgb(
          window.getComputedStyle(div).backgroundColor,
        );
        // Calcular los valores RGB mezclados
        const r = Math.round(
          bgRgb.r * (1 - opacity) + currentBgRgb.r * opacity,
        );
        const g = Math.round(
          bgRgb.g * (1 - opacity) + currentBgRgb.g * opacity,
        );
        const b = Math.round(
          bgRgb.b * (1 - opacity) + currentBgRgb.b * opacity,
        );

        // Aplicar estilo al elemento
        div.style.transition = `background-color 0.1s ease-in-out, color 0.1s ease-in-out`;
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        div.style.color = textC;
      }
    }, 100);
    clearInterval(interval);

    const newContent = contents.div;
    const steps = 0.1;
    let opacitys = 1;

    if (content.props !== newContent.props) {
      const intervalOut = setInterval(() => {
        if (opacitys <= 0) {
          clearInterval(intervalOut);
          setContent(newContent);
          setHeightContent(hContent);
          setHeightFooter(hFooter);
          let opacityIn = 0;
          const intervalIn = setInterval(() => {
            if (opacityIn >= 1) {
              clearInterval(intervalIn);
            } else {
              opacityIn += steps;
              div.style.opacity = opacityIn;
            }
          }, 100);
        } else {
          opacitys -= steps;
          div.style.opacity = opacitys;
        }
      }, 100);
    }
  }

  return (
    <div className="mainDiv h-screen w-screen overflow-hidden">
      <div className="">
        <div className="absolute top-16 w-screen h-72 z-20 overflow-hidden	max-w-screen">
          <div className="overflow-hidden">
            <div className="bird-container bird-container--one">
              <div className="bird bird--one"></div>
            </div>
            <div className="bird-container bird-container--two">
              <div className="bird bird--two"></div>
            </div>

            <div className="bird-container bird-container--three">
              <div className="bird bird--three"></div>
            </div>

            <div className="bird-container bird-container--four">
              <div className="bird bird--four"></div>
            </div>
          </div>
          {adviceElement}
        </div>

        <div className="w-screen h-[25rem] text-white text-2xl">
          <div className="loader text-center">
            <img
              className="imagelogo h-[25rem] logo z-[10]"
              src={hackLogo}
              alt=""
              ref={logoRef}
            />
          </div>
        </div>
        <div className="flex flex-col h-full items-center">
          <div
            className={`bg-white w-fit  rounded-lg justify-items-center content-center	 pt-4 ${heightContent} container4Content`}
          >
            {content}
          </div>
          <div
            className={` w-full absolute bottom-0 ${heightFooter} justify-items-end	mb-2`}
          >
            <div className="w-32 h-full bg-white content-center rounded-lg mr-8 px-2 ">
              <CarruselLogos />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-screen h-36 z-20 overflow-hidden w-screen ">
          <div className="flex flex-row w-full  h-full w-screen ">
            <img src={camaleon} className="animated-cham h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingComponent;
