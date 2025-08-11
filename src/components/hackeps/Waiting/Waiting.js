import React, { useState, useEffect, useRef } from "react";
import isla from "src/assets/img/isla.png";
import barco from "src/assets/img/barco.png";
import hackLogo from "src/assets/img/logoHackeps2025.png";
import nube from "src/assets/img/nuve.png";
import nubeClouding from "src/assets/img/nuveClouding.png";
import "./Waiting.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const Waiting = ({minimalMode=false}) => {
  // Helper to generate random speed and width
  const [isPhone, setIsPhone] = useState(false);
  const [componentMode, setComponentMode] = useState(minimalMode);
  const textWelcome = useRef(null);

  useEffect(() => {
    const checkIsPhone = () => {
      setIsPhone(window.innerWidth <= 768);
    };
    checkIsPhone();
    setComponentMode(minimalMode);
  }, []);

  const getRandomProps = (phone) => {
    let calculatedWidth = Math.random() * 10 + 10;
    if (phone) {
      calculatedWidth = calculatedWidth * 2;
    }
    return {
      duration: Math.random() * 50 + 80, // 80s to 130s
      width: calculatedWidth, // 10vw to 20vw
      top: Math.random() * 10 + 3, // 5vh to 35vh
    };
  };

  // Generate clouds with random props
  const clouds = Array.from({ length: 4 }).map((_, i) =>
    getRandomProps(isPhone),
  );

  useGSAP(() => {
    if (textWelcome.current) {
      const tl = gsap.timeline();
      gsap.registerPlugin(SplitText);
      const split = new SplitText(textWelcome.current, { type: "words" });
      tl.from(split.words, {
        duration: 1.2,
        opacity: 0,
        y: -50,
        stagger: 0.03,
        ease: "power2.out",
      });
      tl.from(
        textWelcome.current.querySelector("img"),
        {
          duration: 1.2,
          opacity: 0,
          y: -50,
          ease: "power2.out",
        },
        "<"
      );
    }
  });

  return (
    <div className="w-full h-screen flex flex-col bg-blueSky overflow-hidden scrollbar-hide relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {clouds.map((cloud, idx) => (
          <Cloud
            key={idx}
            src={idx === clouds.length - 1 ? nubeClouding : nube}
            duration={cloud.duration}
            width={cloud.width}
            top={cloud.top}
            delay={Math.random() * cloud.duration}
          />
        ))}
      </div>
      <div className="capaIsla+Barco flex flex-col md:flex-row justify-between items-center w-full  z-10 h-full ">
        <div className="logoHackeps+text flex flex-col  gap-4 order-first md:order-last transform translate-y-0 md:translate-y-0 md:translate-x-[100%] items-center md:items-start  justify-center h-full">
          <img className="w-5/12 md:w-5/12" src={hackLogo} alt="logo hackeps" />
          <p className="text-3xl md:text-5xl font-bold text-primaryHackeps">
            Proximament...
          </p>
        </div>
        <div className="isla hidden md:flex items-end justify-end h-full transform translate-y-10 -translate-x-5 md:order-none">
          <img src={isla} className="w-5/12" alt="isla" />
        </div>
      </div>
      {/* Infinite moving hours image */}
      <div className="barco absolute bottom-36 md:bottom-36 flex items-end h-full">
        <img
          src={barco}
          className="w-6/12 md:w-3/12 shipMovement"
          alt="barco"
        />
      </div>
      <div className="overflow-hidden w-full z-[50] h-28 md:h-32">
        <div className="w-full h-36 absolute bottom-0 bg-repeat-x overflow-hidden wavesSeaAnim animate-olas-scroll transform translate-y-3 md:translate-y-0 bg-contain"></div>
      </div>
    </div>
  );
};

// Cloud component
function Cloud({ src, duration, width, top, delay }) {
  const style = {
    position: "absolute",
    left: "-25vw",
    top: `${top}vh`,
    width: `${width}vw`,
    animation: `cloud-move ${duration}s linear infinite`,
    animationDelay: `-${delay}s`,
  };
  return <img src={src} style={style} alt="nube" className=" md:w-auto" />;
}

// Add this to your CSS (e.g., Waiting.css or global styles)
/*

*/

export default Waiting;
