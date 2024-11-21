import { React, useEffect, useRef, useState } from "react";
import hackLogo from "src/icons/banner_home_icon.png";
import profiles from "./Profiles";
import "./Waiting.css";
import "./elements.css"
import CounterActivity from "./CounterActivity";
import Button from "src/components/buttons/Button";
import camaleon from "src/assets/camaleon.gif";
import LogosComp from "./LogosComp";


const WaitingComponent = () => {
  const logoRef = useRef(null);
  const [profile, setProfile] = useState("Hacking")
  const [heightContent, setHeightContent] = useState(`h-72`);
  const [heightFooter, setHeightFooter] = useState(`h-40`);
  const [content, setContent] = useState(<div className="text-center"><p>Waiting for the activity to Start</p><CounterActivity type="2"/></div>);
  const [footer, setFooter] = useState(<div className="w-full align-end"> <LogosComp/> </div>);

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
        <div className="absolute top-28 w-screen h-56 z-20 overflow-hidden	max-w-screen">
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

          <div className='Corredera-Anuncis bg-red-300 w-[80vw] h-full  rounded-lg flex flex-col absolute left-1/2 transform -translate-x-1/2 z-[20]'>
          {/* Aixo es mostrara per damunt de lo que hi hagi al top side, animacions o lo que sigui. */}
          <div className='X button mb-2'>
            <p>X</p>
          </div>
          <div className='Titol Activitat'>
            <p>Activitat Lúdica</p>   
          </div>
          <div className='Descripcio'>
            <p><span>Aula: </span> 0.05</p>
          </div>
          <div className='CounterActivity mt-2'>
            <p className='EventStatus'>La activitat comença dintre de </p>
            <CounterActivity type="1" time="13:30"/> 
            
          </div>      
          {/* Fins aqui el AdsContainer */}
        </div>
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
        <div className="flex flex-col h-full ">
          <div className={`bg-red-300 w-full justify-items-center ${heightContent}`}>
            {content}
          </div>
          <div className={`bg-red-300 w-full absolute bottom-0 ${heightFooter}`}>

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
