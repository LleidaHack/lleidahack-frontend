import {React, useEffect, useRef} from "react";
import hackLogo from "src/icons/banner_home_icon.png";
import "./Waiting.css";
import Button from "src/components/buttons/Button";
import camaleon from "src/assets/camaleon.gif";
const WaitingComponent = () => {

    const logoRef = useRef(null);

    const animateLogo = () => {
        const logo = logoRef.current;
        logo.classList.remove('animate'); // Reinicia la animación
        void logo.offsetWidth; // Fuerza el reflujo para reiniciar la animación
        logo.classList.add('animate'); // Añade la clase de animación
    };

    useEffect(() => {
        animateLogo();

        const handleAnimationEnd = () => {
            animateLogo(); // Reinicia la animación al finalizar
        };

        const logo = logoRef.current;
        logo.addEventListener('animationend', handleAnimationEnd);

        return () => {
            logo.removeEventListener('animationend', handleAnimationEnd); // Limpieza del evento
        };
    }, []);

    function mikoShow() {
        //Mostrar un mono que ponga que proximamente se abren inscripciones
    }

    return (
        <div className="backgrounder bg-primaryHackeps h-screen w-screen overflow-hidden">
            <div className="">
                <div className="absolute top-48 w-screen h-36 z-20 overflow-hidden	max-w-screen">
                    <div className="overflow-hidden">
                        <div class="bird-container bird-container--one">
                            <div class="bird bird--one"></div>
                        </div>
                        <div class="bird-container bird-container--two">
                            <div class="bird bird--two"></div>
                        </div>
                        
                        <div class="bird-container bird-container--three">
                            <div class="bird bird--three"></div>
                        </div>
                        
                        <div class="bird-container bird-container--four">
                            <div class="bird bird--four"></div>
                        </div>
                    </div>
                
                </div>
                <div className="flex flex-row">
                    <div id="animals-1 " className="w-full">
                    </div>
                    <div className="flex flex-col w-screen h-screen text-white text-2xl z-30">
                        
                        <div className="loader text-center">
                            <img className="imagelogo h-[30rem] logo" src={hackLogo} alt="" ref={logoRef}/>
                        </div>
                        <div className="mt-32 ml-5 w-full text-center ">
                            <Button onClick={mikoShow} primary outline>
                                Inscripcions HackEPS 2024
                            </Button>                    
                        </div>
                    </div>
                    <div id="animals-2" className="w-full ">
                    </div>
                    
                </div>
                <div className="absolute bottom-0 w-screen h-36 z-20 overflow-hidden w-screen ">
                    <div className="flex flex-row w-full  h-full w-screen ">
                        <img src={camaleon} className="animated-cham h-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitingComponent;