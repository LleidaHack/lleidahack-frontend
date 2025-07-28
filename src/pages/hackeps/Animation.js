import React, {useRef} from 'react'
import Hero2 from 'src/components/hackeps/Home/HeroSection/Hero2'
import HeroSection from 'src/components/hackeps/Home/HeroSection/HeroSection'
import Waiting from 'src/components/hackeps/Waiting/Waiting'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'src/components/hackeps/Waiting/Waiting.css'

const Animation = () => {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(div1.current, {
            duration: 5,
            opacity: 0,
            y: -10,
            ease: "power1.inOut",
            delay: 2
        }, 0);
        tl.to(div2.current, {
            duration: 5,
            y: "-110vh",
            ease: "power1.inOut",
            delay: 2
        }, 0);
        

    }, []);


  return (
    <div>
        <div ref={div1}>
            <Waiting minimalMode={true} />
        </div>
        <div ref={div2} className='flex flex-col transform -translate-y-[10vh]'>
            <div className='olas h-[10vh] w-full'>
                <div className="relative bottom-0 left-0 w-full z-[50] h-28 md:h-32 pointer-events-none">
                    <div className="w-full h-full bg-repeat-x bg-bottom animate-olas-scroll wavesSeaAnim bg-contain"></div>
                </div>
            </div>
            <Hero2 />
        </div>
        <div ref={div3}>
            <HeroSection />
        </div>
    </div>
  )
}

export default Animation