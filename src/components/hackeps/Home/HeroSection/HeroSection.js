import React, { useEffect, useState, useMemo } from "react";
import CountdownTimer from "src/components/hackeps/Home/Timer.js";
import MainTitle from "src/components/hackeps/Home/MainTitle.js";
import sirena from "src/assets/img/sirenapiedra.png";
import ancla from "src/assets/img/cadenalarga.png";
import fish1 from "src/assets/img/fish1.png";
import fish2 from "src/assets/img/fish2.png";
import fish3 from "src/assets/img/fish3.png";
import fish4 from "src/assets/img/fish4.png";
import starfishImg from "src/assets/img/starfish.png";

const HeroSection = ({
  initialDate,
  finalDate,
  activeTimer,
  animSection = false,
}) => {
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(finalDate);
  const [timerActive, setTimerActive] = useState(activeTimer);
  const [animationSection, setAnimationSection] = useState(animSection);
  const [starfish, setStarfish] = useState([]);

  useEffect(() => {
    setAnimationSection(animSection);
  }, [animSection]);

  useEffect(() => {
    setStartDate(initialDate);
    setEndDate(finalDate);
    setTimerActive(activeTimer);
  }, [initialDate, finalDate, activeTimer]);

  const getRandomProps = () => {
    let calculatedWidth = Math.random() * 10 + 10;
    if (window.innerWidth <= 768) {
      calculatedWidth = calculatedWidth * 2;
    }
    // If mobile, make fish move faster (shorter duration)
    const isMobile = window.innerWidth <= 768;
    return {
      duration: isMobile
        ? Math.random() * 10 + 30 // 30s to 40s on mobile
        : Math.random() * 50 + 80, // 80s to 130s on desktop
      width: calculatedWidth, // 10vw to 20vw (doubled on mobile above)
      top: Math.random() * 100 - 42,
      zIndex: Math.random() < 0.5 ? 10 : 40,
    };
  };

  const fishImages = [
    { src: fish1, baseDirection: "right", name: "fish1" },
    { src: fish2, baseDirection: "left", name: "fish2" },
    { src: fish3, baseDirection: "right", name: "fish3" },
    { src: fish4, baseDirection: "left", name: "fish4" },
  ];

  // Generate fish with random props, fixed image and direction
  const fish = useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => {
      const direction = Math.random() < 0.5 ? "right" : "left";
      const props = getRandomProps();
      const fishData = fishImages[idx % fishImages.length];
      const needsFlip = fishData.baseDirection !== direction;

      return {
        ...props,
        direction,
        src: fishData.src,
        needsFlip,
        delay: Math.random() * props.duration,
        name: fishData.name,
      };
    });
  }, []); // se ejecuta solo al montar

  return (
    <div className="overflow-hidden relative z-10">
      <div className="w-full h-[70vh] bg-blueSea flex flex-row relative justify-center">
        {/* Fish container absolutely positioned over the whole section */}
        <div className="fish-container pointer-events-none absolute inset-0 w-full h-full z-40">
          {fish.map((fishProps, idx) => (
            <Fish
              key={idx}
              src={fishProps.src}
              duration={fishProps.duration}
              width={fishProps.width}
              top={fishProps.top}
              delay={fishProps.delay}
              direction={fishProps.direction}
              needsFlip={fishProps.needsFlip}
              zIndex={fishProps.zIndex}
            />
          ))}
        </div>
        <div className="logo&countdown flex flex-col justify-center items-center gap-2z-30">
          <div className="logoSection w-full md:h-2/3 ">
            {animationSection ? (
              <MainTitle
                buttonText={"Descobreix més"}
                refresh={true}
                startTime={startDate}
                endTime={endDate}
                timerActive={timerActive}
              />
            ) : (
              <MainTitle />
            )}
          </div>
          <div className="countdown flex justify-start items-end mt-5">
            <CountdownTimer
              startTime={startDate}
              endTime={endDate}
              timerActive={timerActive}
            />
          </div>
        </div>
        <div className="bubbles"></div>
      </div>
      <div className="starfish-container pointer-events-none absolute inset-0 w-full h-full z-10">
        {starfish.map((star) => (
          <img
            key={star.id}
            src={starfishImg}
            alt="Starfish"
            className="absolute transition-opacity duration-1000 ease-in-out"
            style={{
              top: star.y,
              left: star.x,
              width: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );

  // Componente Fish (igual que Cloud pero para peces)
  function Fish({
    src,
    duration,
    width,
    top,
    delay,
    direction,
    needsFlip,
    zIndex,
  }) {
    const style = {
      position: "absolute",
      left: direction === "right" ? "-25vw" : "100vw",
      top: `${top}vh`,
      width: `${width}vw`,
      animation:
        direction === "right"
          ? `cloud-move ${duration}s linear infinite`
          : `cloud-move-reverse ${duration}s linear infinite`,
      animationDelay: `-${delay}s`,
      zIndex: 10,
      transform: needsFlip ? "scaleX(-1)" : "scaleX(1)",
    };

    return (
      <img
        src={src}
        style={style}
        alt="pez"
        className={`md:w-auto z-${zIndex}`}
      />
    );
  }
};

export default HeroSection;
