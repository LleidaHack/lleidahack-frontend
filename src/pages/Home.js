import React from 'react';
import Header from 'src/components/Header/Header.js'
import Footer from 'src/components/Footer/Footer.js'
import CalendarDates from "src/components/Home/Calendar.js";
import Sponsors from "src/components/Home/Sponsors.js";
import Schedule from "src/components/Home/Schedule.js";
import CountdownTimer from "src/components/Home/Timer.js";
import MainTitle from 'src/components/Home/MainTitle.js';


const Home = () => {
    const startDate = new Date(2023, 10, 25);
    const endDate = new Date(2023, 10, 27);
    const startTime = new Date(2023, 10, 25, 11);
    const endTime = new Date(2023, 10, 26, 11);
    const timerActive = true;
  
    const events = [
      { time: "10h", title: "Example", description: "Description" },
      { time: "11h", title: "Example", description: "Description" },
      { time: "12h", title: "Example", description: "Description" },
      { time: "14h", title: "Example", description: "Description" },
    ];

  
    return (
      <div>
        <Header />
        <MainTitle />
        <CountdownTimer startTime={startTime} endTime={endTime} timerActive={timerActive} />
        <CalendarDates startDate={startDate} endDate={endDate} />
        <Schedule events={events} />
        <Sponsors />
        <Footer />
      </div>
    );
  };

export default Home;