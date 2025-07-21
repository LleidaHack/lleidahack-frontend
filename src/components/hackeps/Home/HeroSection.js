import React, {useEffect, useState} from 'react'
import CountdownTimer from "src/components/hackeps/Home/Timer.js";
import MainTitle from "src/components/hackeps/Home/MainTitle.js";
import sirena from "src/assets/img/sirenaancla.png";

const HeroSection = ({initialDate, finalDate, activeTimer}) => {
    const [startDate, setStartDate] = useState(initialDate);
    const [endDate, setEndDate] = useState(finalDate);
    const [timerActive, setTimerActive] = useState(activeTimer);
    
    useEffect(() => {
        setStartDate(initialDate);
        setEndDate(finalDate);
        setTimerActive(activeTimer);
        
    }, [initialDate, finalDate, activeTimer]);


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
            </div>
        </div>
        <div className='aboveAnimations z-[40]'>
            <div className='fish'>

            </div>
            <div className='bubbles'>
                
            </div>

        </div>
    </div>
)
}

export default HeroSection