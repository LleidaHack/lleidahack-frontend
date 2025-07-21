import React, {useEffect, useState, useMemo} from 'react'
import CountdownTimer from "src/components/hackeps/Home/Timer.js";
import MainTitle from "src/components/hackeps/Home/MainTitle.js";
import sirena from "src/assets/img/sirenaancla.png";
import fish1 from "src/assets/img/fish1.png";
import fish2 from "src/assets/img/fish2.png";
import fish3 from "src/assets/img/fish3.png";
import fish4 from "src/assets/img/fish4.png";

const HeroSection = ({initialDate, finalDate, activeTimer}) => {
    const [startDate, setStartDate] = useState(initialDate);
    const [endDate, setEndDate] = useState(finalDate);
    const [timerActive, setTimerActive] = useState(activeTimer);
    
    useEffect(() => {
        setStartDate(initialDate);
        setEndDate(finalDate);
        setTimerActive(activeTimer);
        
    }, [initialDate, finalDate, activeTimer]);

    const getRandomProps = () => {
        let calculatedWidth = Math.random() * 10 + 10;
        return {
            duration: Math.random() * 50 + 80, // 80s to 130s
            width: calculatedWidth, // 10vw to 20vw
            top: Math.random() * 30 + 5, // 5vh to 35vh
        };
    };

    const fishImages = [
    { src: fish1, baseDirection: 'right', name: 'fish1' },
    { src: fish2, baseDirection: 'left', name: 'fish2' },
    { src: fish3, baseDirection: 'right', name: 'fish3' },
    { src: fish4, baseDirection: 'left', name: 'fish4' },
    ];
  

  // Generate fish with random props, fixed image and direction
    const fish = useMemo(() => {
        return Array.from({ length: 4 }).map((_, idx) => {
            const direction = Math.random() < 0.5 ? 'right' : 'left';
            const props = getRandomProps();
            const fishData = fishImages[idx % fishImages.length];
            const needsFlip = fishData.baseDirection !== direction;

            return {
            ...props,
            direction,
            src: fishData.src,
            needsFlip,
            delay: Math.random() * props.duration,
            };
        });
    }, []); // se ejecuta solo al montar

    return (
        <div>
            <div className='w-full h-screen bg-blueSea flex flex-row'>
                <div className='logo&countdown flex flex-col justify-center items-center gap-2 w-2/3'>
                    <div className='logoSection w-full h-2/3'>
                        <MainTitle />
                    </div>
                    <div className='countdown h-1/3 flex justify-start items-end'>
                        <CountdownTimer
                            startTime={startDate}
                            endTime={endDate}
                            timerActive={timerActive}
                        />
                    </div>
                </div>
                <div className='sirena flex flex-col items-end justify-end w-1/3 '>
                    <div className='w-full flex justify-end'>
                        <img src={sirena} alt='sirena' className='w-9/12' />
                    </div>
                    {fish.map((fishProps, idx) => (

                        <Fish
                            key={idx}
                            src={fishProps.src}
                            duration={fishProps.duration}
                            width={fishProps.width}
                            top={fishProps.top}
                            delay={fishProps.delay}
                            direction={fishProps.direction}
                        />
                    ))}
                </div>
                <div className='bubbles'>
                </div>
            </div>
        </div>
    )

    // Componente Fish (igual que Cloud pero para peces)
    function Fish({ src, duration, width, top, delay, direction, needsFlip }) {
        const style = {
            position: "absolute",
            left: direction === 'right' ? "-25vw" : "100vw",
            top: `${top}vh`,
            width: `${width}vw`,
            animation: direction === 'right'
            ? `cloud-move ${duration}s linear infinite`
            : `cloud-move-reverse ${duration}s linear infinite`,
            animationDelay: `-${delay}s`,
            zIndex: 10,
            transform: needsFlip ? "rotate-180" : "rotate-0",
        };

        return <img src={src} style={style} alt="pez" className="md:w-auto" />;
    }
}



export default HeroSection