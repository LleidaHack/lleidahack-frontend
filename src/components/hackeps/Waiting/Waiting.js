import React from 'react'
import isla from 'src/assets/img/isla.png'
import barco from 'src/assets/img/barco.png'
import hackLogo from "src/assets/img/logoHackeps2025.png"
import nube from 'src/assets/img/nuve.png';
import mar from 'src/assets/img/marAncho.png';
import './Waiting.css' // Import your CSS file for styles


const Waiting = () => {
// Helper to generate random speed and width
const getRandomProps = () => ({
    duration: Math.random() * 50 + 80, // 80s to 130s
    width: Math.random() * 10 + 10,    // 10vw to 20vw
    top: Math.random() * 10 + 3        // 5vh to 35vh
});

// Generate clouds with random props
const clouds = Array.from({ length: 4 }).map((_, i) => getRandomProps());

return (
    <div className='w-full h-screen flex flex-col bg-blueSky overflow-hidden scrollbar-hide relative'>
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
            {clouds.map((cloud, idx) => (
                <Cloud
                    key={idx}
                    src={nube}
                    duration={cloud.duration}
                    width={cloud.width}
                    top={cloud.top}
                    delay={Math.random() * cloud.duration}
                />
            ))}
        </div>
        <div className='capaIsla+Barco flex flex-row justify-between items-center w-full  z-10 h-full '>
            <div className='barco flex items-end h-full'>
                <img src={barco} className='w-8/12 shipMovement' alt="barco" />
            </div>
            <div className='logoHackeps+text flex flex-col items-center justify-center gap-4'>
                <img className="w-7/12" src={hackLogo} alt="logo hackeps" />
                <p className='text-5xl font-bold text-primaryHackeps'>Proximament...</p>
            </div>
            <div className='isla flex items-end justify-end h-full transform translate-y-20'>
                <img src={isla} className='w-9/12' alt="isla" />
            </div>
        </div>
        {/* Infinite moving hours image */}
        <div className="overflow-hidden w-full h-32 overflow-hidden z-[50]">
            <div className="flex w-max animate-marMove">
                <img
                src={mar}
                className="h-72 flex-shrink-0 object-cover"
                alt="mar"
                draggable={false}
                />
                <img
                src={mar}
                className="h-28 flex-shrink-0 object-cover"
                alt="mar"
                draggable={false}
                />
            </div>
        </div>
    </div>
)
}

// Cloud component
function Cloud({ src, duration, width, top, delay }) {
    const style = {
        position: 'absolute',
        left: '-25vw',
        top: `${top}vh`,
        width: `${width}vw`,
        animation: `cloud-move ${duration}s linear infinite`,
        animationDelay: `-${delay}s`
    };
return <img src={src} style={style} alt="nube" />;
}

// Add this to your CSS (e.g., Waiting.css or global styles)
/*

*/


export default Waiting