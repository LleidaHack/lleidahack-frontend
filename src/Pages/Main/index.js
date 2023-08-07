import React from "react";

import Schedule from "../../components/Home/Schedule"
import QrCode from "../../components/Home/QrCode";
import CountdownTimer from "../../components/Home/Timer";

import CalendarDates from "../../components/Home/Calendar";

import Sponsors from "../../components/Home/Sponsors";
import HackerForm from "../../components/Forms/HackerForm";



const Main = () => {
    const startDate = new Date(2022, 10, 25);
    const endDate = new Date(2022, 10, 27);
    const startTime = new Date(2022, 10, 25, 11);
    const endTime = new Date(2022, 10, 26, 11);
    const timerActive = false;

    const events = [
        { time: "10h", title: "Example", description: "Description" },
        { time: "11h", title: "Example", description: "Description" },
        { time: "12h", title: "Example", description: "Description" },
        { time: "14h", title: "Example", description: "Description" },
    ];

    return (
        <div>
            <CountdownTimer startTime={startTime} endTime={endTime} timerActive={timerActive} />
            <Schedule events={events} />
            <CalendarDates startDate={startDate} endDate={endDate} />
            <QrCode url={"https://lleidahack.dev/"} />
            <Sponsors />  
        </div>
        
    );
}

export default Main;
