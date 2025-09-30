import { React, useEffect, useState } from "react";
import profiles from "./Profiles";
import hackLogo from "src/icons/banner_home_icon.png";
import camaleon from "src/assets/camaleon.gif";
import "./elements.css";
import CounterActivity from "./CounterActivity";
import "./Waiting.css";

const Body = () => {
  const [profile, setProfile] = useState("Hacking");
  const [title, setTitle] = useState("HackEPS 2025");
  const [midSideElement, setMidSideElement] = useState(
    <div className="midSideElement">MidSideElement</div>,
  );
  const [botSideElement, setBotSideElement] = useState(
    <div className="botSideElement">BotSideElement</div>,
  );
  //Hacer una configuración con 4 perfiles de actividad (1. Hacking, 2. Anuncios de actividad en curso, 3. Comidas o cenas junto a las instrucciones del aula, 4. Modo noche( oscuro))
  //En Backend, una tabla con el itinerario y en frontend, un endpoint que actualize cada X tiempo buscando si hay nueva actividad que anunciar.
  //En frontend, la actualización dependerá de la hora local. Esto es para que todo se sincronize al mismo tiempo en todos los dispositivos.

  //Las configuraciones deben cambiar entre ellas de forma suave, con animaciones y sin saltos.

  //Aqui hi haura un servell a backend per obtindre el perfil actual.
  useEffect(() => {
    const actualProfile = "Hacking"; //getActualHackingProfile();
    setProfile(actualProfile);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Do something after 5 seconds
      const profile2 = "Meals";
      transitionBackgrounds(profile2);
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

  return (
    <div className="mainDiv w-screen h-full flex flex-col overflow-hidden justify-between items-center">
      <div className="topSide ">
        {/* Aquesta corredera anuncis, al finalitzar, pasara a formar part de una component anomenada AdsContainer */}
        <div className="Corredera-Anuncis bg-red-300 w-[80vw] mt-5 rounded-lg flex flex-col absolute left-1/2 transform -translate-x-1/2 z-[20]">
          {/* Aixo es mostrara per damunt de lo que hi hagi al top side, animacions o lo que sigui. */}
          <div className="X button mb-2">
            <p>X</p>
          </div>
          <div className="Titol Activitat">
            <p>Activitat Lúdica</p>
          </div>
          <div className="Descripcio">
            <p>
              <span>Aula: </span> 0.05
            </p>
          </div>
          <div className="CounterActivity mt-2">
            <p className="EventStatus">La activitat comença dintre de </p>
            <CounterActivity type="1" time="57" />
          </div>
          {/* Fins aqui el AdsContainer */}
        </div>
      </div>
      <div className="midSide bg-red-300">{midSideElement}</div>

      <div className="botSide mb-40 self-end mr-10 bg-red-300">
        {botSideElement}
        {/* canviara entre patrocinadors, counterhack block, etc... */}
      </div>
    </div>
  );
};

export default Body;
