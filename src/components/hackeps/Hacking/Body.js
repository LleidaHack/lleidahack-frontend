import { React, useEffect, useRef, useState } from "react";
import hackLogo from "src/icons/banner_home_icon.png";
import profiles from "./Profiles";
import "./Waiting.css";
import "./elements.css"

import Button from "src/components/buttons/Button";
import camaleon from "src/assets/camaleon.gif";
const WaitingComponent = () => {
  const logoRef = useRef(null);
  const [profile, setProfile] = useState("Hacking")

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
    const actualProfile = "Hacking"; //getActualHackingProfile();
    setProfile(actualProfile);
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      // Do something after 5 seconds
      const profile2 = "Meals";
      transitionBackgrounds(profile2)
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  function transitionBackgrounds(nextProfile) {
    const bg1 = profiles[profile].bgColor?.trim(); // Actual profile
    const bg2 = profiles[nextProfile]?.bgColor?.trim();
    // Validar que bg1 y bg2 sean cadenas válidas
    if (!/^#[0-9A-Fa-f]{6}$/.test(bg1) || !/^#[0-9A-Fa-f]{6}$/.test(bg2)) {
        console.error("Uno de los colores no es válido:", { bg1, bg2 });
        return;
    }
    const step = 0.1;
    let opacity = 0;
    const mainDiv = document.querySelector(".mainDiv");

    let interval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(interval);
            setProfile(nextProfile); // Actualizar el perfil al finalizar
        } else {
            opacity += step;

            // Calcular los valores RGB mezclados
            const r = Math.round(parseInt(bg1.slice(1, 3), 16) * (1 - opacity) + parseInt(bg2.slice(1, 3), 16) * opacity);
            const g = Math.round(parseInt(bg1.slice(3, 5), 16) * (1 - opacity) + parseInt(bg2.slice(3, 5), 16) * opacity);
            const b = Math.round(parseInt(bg1.slice(5, 7), 16) * (1 - opacity) + parseInt(bg2.slice(5, 7), 16) * opacity);

            // Aplicar estilo al elemento
            mainDiv.style.transition = `background-color 0.1s ease-in-out`;
            mainDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }, 100);
  }

  return (
    <div className="mainDiv h-screen w-screen overflow-hidden">
      <div className="">
        <div className="absolute top-48 w-screen h-36 z-20 overflow-hidden	max-w-screen">
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
        </div>
        <div className="flex flex-row">
          

          <div className="flex flex-col w-screen h-screen text-white text-2xl z-30">
            <div className="loader text-center">
              <img
                className="imagelogo h-[30rem] logo"
                src={hackLogo}
                alt=""
                ref={logoRef}
              />
            </div>
            <div className="mt-32 ml-5 w-full text-center ">
              <Button primary outline>
                Inscripcions HackEPS 2024
              </Button>
            </div>
          </div>
          <div id="animals-2" className="w-full "></div>
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
