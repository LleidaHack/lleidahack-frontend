import React, {useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import burbujas from 'src/assets/img/burbujas.png'


const Hero2 = ({completed=false}) => {
    const [ensureAnimations, setEnsureAnimations] = useState(true);
    const bubble1 = useRef(null);
    const bubble2 = useRef(null);
    const bubble3 = useRef(null);
    const bubble4 = useRef(null);
    const bubble5 = useRef(null);

   useGSAP(() => {
        if (ensureAnimations) {
            const bubbles = [bubble1, bubble2, bubble3, bubble4, bubble5];

            const animateBubbles = () => {
                const tl = gsap.timeline({
                    onComplete: () => {
                        if (ensureAnimations) {
                            animateBubbles();
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

            animateBubbles();
        }
    }, [completed]);




    useEffect(() => {
        setEnsureAnimations(completed);
    }, [completed]);

    return (
        <div>
            <div className='bg-blueSea w-full h-[110vh] flex flex-row'>
                <div className='col1 flex flex-row cartel w-1/3'>

                </div>
                <div className='col2 flex flex-row justify-end items-center align-middle w-1/3'>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble1} />
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble2}/>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble3}/>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble4}/>
                    <img src={burbujas} alt="Burbujas" className='w-28 transform translate-y-[50vh]' ref={bubble5}/>    
                </div>
                <div className='col3 flex flex-row ancla w-1/3'>
                    
                </div>

            </div>

            <div className='peces'>

            </div>


        </div>
    )
}

export default Hero2