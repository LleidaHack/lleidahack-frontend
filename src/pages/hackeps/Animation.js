import React, {useState, useRef} from 'react'
import Hero2 from 'src/components/hackeps/Home/HeroSection/Hero2'
import HeroSection from 'src/components/hackeps/Home/HeroSection/HeroSection'
import Waiting from 'src/components/hackeps/Waiting/Waiting'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import 'src/components/hackeps/Waiting/Waiting.css'

const Animation = () => {
    const div0 = useRef(null);
    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const [div2Status, setDiv2Status] = useState(false);


    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(div1.current, { y: '-100%', duration: 3, ease: 'power2.inOut', delay: 3 })
            .to(div2.current, { y: '-90%', duration: 3, ease: 'power2.inOut', onComplete: () => setDiv2Status(true) }, '<')
        
        

    }, []);


  return (
    <div className='w-full max-h-screen overflow-hidden' ref={div0}>
        <div ref={div1}>
            <Waiting minimalMode={true} />
        </div>
        <div ref={div2} className='flex flex-col transform -translate-y-[10vh]'>
            <div className='olas h-[10vh] w-full'>
                <div className="relative bottom-0 left-0 w-full z-[50] h-28 md:h-32 pointer-events-none">
                    <div className="w-full h-full bg-repeat-x bg-bottom animate-olas-scroll wavesSeaAnim bg-contain"></div>
                </div>
            </div>
            <Hero2 completed={div2Status} />
        </div>
        <div ref={div3}>
            <HeroSection />
        </div>
    </div>
  )
}

export default Animation