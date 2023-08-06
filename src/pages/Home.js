import React from 'react';
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import CalendarDates from "../components/Home/Calendar.js";
import Sponsors from "../components/Home/Sponsors.js";
import Schedule from "../components/Home/Schedule.js";
import CountdownTimer from "../components/Home/Timer.js";
import HackerForm from "../components/Forms/HackerForm.js";
import QrCode from '../components/Home/QrCode.js';


const Home = () => {
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
        <Header />
        <CountdownTimer startTime={startTime} endTime={endTime} timerActive={timerActive} />
        <CalendarDates startDate={startDate} endDate={endDate} />
        <Schedule events={events} />
        <Sponsors />
        <Footer />
      </div>
    );
  };

export default Home;