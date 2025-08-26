import React, {useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import burbujas from 'src/assets/img/burbujas.png'
import anclaCadena from 'src/assets/img/cadenalarga.png'
import sirena from 'src/assets/img/sirenapiedra.png'
import logoHackeps from 'src/assets/img/logoHackeps2025.png'
import cartell from 'src/assets/img/cartellPowered.png'
import CountdownTimer from "src/components/hackeps/Home/Timer.js";
import Button from "src/components/buttons/Button";
import peix1 from 'src/assets/img/fish1.png'
import peix2 from 'src/assets/img/fish2 invert.png'
import peix3 from 'src/assets/img/fish3.png'
import peix4 from 'src/assets/img/fish4 invert.png'


const Hero2 = ({completed=false, initialDate, finalDate, activeTimer}) => {
    const [ensureAnimations, setEnsureAnimations] = useState(true);
    const bubble1 = useRef(null);
    const bubble2 = useRef(null);
    const bubble3 = useRef(null);
    const bubble4 = useRef(null);
    const bubble5 = useRef(null);

    const fish1 = useRef(null);
    const fish2 = useRef(null);
    const fish3 = useRef(null);
    const fish4 = useRef(null);
    const fish5 = useRef(null);

    const cadena = useRef(null);
    const cartellet = useRef(null);
    const sirenaPiedra = useRef(null);
    const logoHackeps2025 = useRef(null);
    const [startDate, setStartDate] = useState(initialDate);
        const [endDate, setEndDate] = useState(finalDate);
        const [timerActive, setTimerActive] = useState(activeTimer);
        
        useEffect(() => {
            setStartDate(initialDate);
            setEndDate(finalDate);
            setTimerActive(activeTimer);
            
        }, [initialDate, finalDate, activeTimer]);

   useGSAP(() => {
        if (ensureAnimations) {
            const bubbles = [bubble1, bubble2, bubble3, bubble4, bubble5];
            const fishes = [fish1, fish2, fish3, fish4, fish5];
            const animateBubblesLoop = () => {
                    // Cantidad de burbujas aleatoria entre 1 y 5
                    const count = Math.floor(Math.random() * bubbles.length) + 1;

                    // Elegir burbujas aleatorias sin repetir
                    const selected = gsap.utils.shuffle([...bubbles]).slice(0, count);

                    const tlBubbles = gsap.timeline({
                        onComplete: () => {
                            // Reset después de que terminen todas
                            gsap.set(bubbles.map(b => b.current), { y: '50vh', scale: 1 });
                            // Llama de nuevo para repetir
                            if (ensureAnimations) animateBubblesLoop();
                        }
                    });

                    selected.forEach((bubbleRef, i) => {
                        tlBubbles.to(bubbleRef.current, {
                            y: '-70vh',
                            scale: gsap.utils.random(0.5, 1),
                            duration: gsap.utils.random(6, 7),
                            ease: 'linear',
                            delay: gsap.utils.random(0, 1),
                        }, i === 0 ? undefined : '<');
                    });
                };
            
            const animateFishLoop = () => {
                // Cantidad de peces aleatoria entre 2 y 5 (mínimo 2)
                const count = Math.floor(Math.random() * (fishes.length - 1)) + 2;

                // Elegir peces aleatorios sin repetir
                const selected = gsap.utils.shuffle([...fishes]).slice(0, count);

                const tlFish = gsap.timeline({
                    onComplete: () => {
                        // Reset después de que terminen todas
                        gsap.set(fishes.map(f => f.current), { x: '-10vw', scale: 1 });
                        // Llama de nuevo para repetir
                        if (ensureAnimations) animateFishLoop();
                    }
                });

                selected.forEach((fishRef, i) => {
                    // Animar de izquierda (-10vw) a derecha (110vw)
                    gsap.set(fishRef.current, { x: '-10vw', y: 0, scale: gsap.utils.random(0.8, 1.2) });
                    tlFish.to(fishRef.current, {
                        x: '110vw',
                        duration: gsap.utils.random(7, 10),
                        ease: 'linear',
                        delay: gsap.utils.random(0, 1),
                    }, i === 0 ? undefined : '<');
                });
            }

            const animateBubblesAndPhishLoop = () => {
                if (ensureAnimations) { 
                    animateBubblesLoop()
                    animateFishLoop()
                };
            };

            const animateElements = () => {
                
                const tl = gsap.timeline({
                    onComplete: () => {
                        if (ensureAnimations && cadena.current) {
                            gsap.to(cadena.current, {
                                y: "-30%",
                                duration: 2,
                                ease: "power1.inOut",
                                onComplete: () => {
                                    gsap.to(cadena.current, {
                                        y: "-5%",
                                        rotation: 5,
                                        duration: 15,
                                        yoyo: false,
                                        ease: "sine.inOut"
                                        // No más animaciones ni reset, se queda en la posición final
                                    });
                                }
                            });
                            animateBubblesAndPhishLoop();
                            if (cartellet.current) {
                                // Subir el cartel al centro y hacer movimiento similar al ancla
                                gsap.to(cartellet.current, {
                                    delay: 1.4, // Pequeño delay para desincronizar con la cadena
                                    y: "-120%",
                                    duration: 2,
                                    ease: "power1.inOut",
                                    onComplete: () => {
                                        // Oscilación en el centro
                                        gsap.to(cartellet.current, {
                                            y: "-130%",
                                            rotation: 5,
                                            duration: 2,
                                            ease: "sine.inOut",
                                            yoyo: true,
                                            repeat: 1,
                                            onComplete: () => {
                                                // Subir y desvanecer
                                                gsap.to(cartellet.current, {
                                                    y: "-250%",
                                                    duration: 3,
                                                    ease: "sine.inOut",
                                                    onComplete: () => {
                                                        // Subir la sirena suavemente tras desaparecer el cartel
                                                        const sirenaEl = sirenaPiedra.current;
                                                        if (sirenaEl) {
                                                            // Subir la sirena suavemente
                                                            gsap.to(sirenaEl, {
                                                                y: "-20%",
                                                                duration: 3.5,
                                                                ease: "sine.inOut"
                                                            });
                                                            // Cambiar opacidad del logo a 100 mientras la sirena sube
                                                            if (logoHackeps2025.current) {
                                                                // Asegúrate de quitar cualquier clase de Tailwind que fuerce opacity-0
                                                                // En lugar de quitar la clase inmediatamente, espera a que la animación de opacidad comience
                                                                // Asegúrate de que el logo esté oculto al principio
                                                                gsap.set(logoHackeps2025.current, { opacity: 0 });
                                                                // Quita la clase de Tailwind que fuerza opacity-0
                                                                logoHackeps2025.current.classList.remove('opacity-0');
                                                                // Anima la opacidad gradualmente a 1
                                                                gsap.to(logoHackeps2025.current, {
                                                                    opacity: 1,
                                                                    duration: 3.5,
                                                                    ease: "sine.inOut"
                                                                });
                                                            }
                                                        }

                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }


                        }
                    }
                });

                // Cantidad de burbujas aleatoria entre 1 y 5
                const count = Math.floor(Math.random() * bubbles.length) + 1;

                // Elegir burbujas aleatorias sin repetir
                const selected = gsap.utils.shuffle([...bubbles]).slice(0, count);

                selected.forEach((bubbleRef, i) => {
                    tl.to(bubbleRef.current, {
                        y: '-70vh',
                        scale: gsap.utils.random(0.5, 1),
                        duration: gsap.utils.random(6, 7),
                        ease: 'linear',
                        delay: gsap.utils.random(0, 1),
                    }, i === 0 ? undefined : '<');
                });

                // Reset después de que terminen todas
                tl.add(() => {
                    gsap.set(bubbles.map(b => b.current), { y: '50vh', scale: 1 });
                });
            };

            animateElements();
        }
    }, [completed]);




    useEffect(() => {
        setEnsureAnimations(completed);
    }, [completed]);

    return (
        <div>
            <div className='bg-blueSea w-full h-[110vh] flex flex-row'>
                <div className='col1 flex flex-row cartel w-1/3'>
                    <img src={cartell} ref={cartellet} className="w-3/12 absolute bottom-0 left-[10%] transform translate-y-[70%]" alt="cartell" />
                    <div className='opacity-0' ref={logoHackeps2025}>
                        <img src={logoHackeps} className="w-[22%] absolute bottom-0 left-[20%] transform -translate-y-[80%] " alt="logoHackeps" />
                        <div className='absolute top-[65%] left-[28%]'>
                            <Button onClick={() => {}} className={"bg-red-500 text-white hover:bg-primaryHackeps duration-1 cursor-pointer"} outline>
                                Descobreix més
                            </Button>
                        </div>
                        
                        <div className='countdown md:h-1/3 flex justify-start items-end absolute bottom-10 -left-[16%]'>
                            <CountdownTimer
                                startTime={startDate}
                                endTime={endDate}
                                timerActive={timerActive}
                            />
                    </div>
                    </div>
                </div>
                <div className='col2 flex flex-row justify-end items-center align-middle w-1/3'>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble1} />
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble2}/>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble3}/>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble4}/>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble5}/>    
                </div>
                <div className='col3 flex flex-row ancla w-1/3'>
                    <img src={anclaCadena} ref={cadena} className={`w-2/12 absolute bottom-0 left-[80%] transform -translate-y-[80%] ${!ensureAnimations ? 'hidden' : 'block'}`} alt="ancla" />
                    <img src={sirena} ref={sirenaPiedra} className="w-2/12 absolute bottom-0 left-[84%] transform translate-y-[70%]" alt="sirena"/>
                </div>

            </div>

            <div className='peces'>
                <img src={peix1} ref={fish1} className='absolute w-1/12 left-[-10%] top-[30%]'/>
                <img src={peix2} ref={fish2} className='absolute w-1/12 left-[-10%] top-[0%]'/>
                <img src={peix3} ref={fish3} className='absolute w-1/12 left-[-10%] top-[40%]'/>
                <img src={peix4} ref={fish4} className='absolute w-1/12 left-[-10%] top-[20%]'/>
                <img src={peix1} ref={fish5} className='absolute w-1/12 left-[-10%] top-[50%]'/>
            </div>
        </div>
    )
}

export default Hero2