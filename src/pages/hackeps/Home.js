import React, { useEffect, useState } from "react";
import Header from "src/components/hackeps/Header/Header.js";
import Footer from "src/components/hackeps/Footer/Footer.js";
import CalendarDates from "src/components/hackeps/Home/Calendar.js";
import Sponsors from "src/components/hackeps/Home/Sponsors.js";
import Schedule from "src/components/hackeps/Home/Schedule.js";
import CountdownTimer from "src/components/hackeps/Home/Timer.js";
import MainTitle from "src/components/hackeps/Home/MainTitle.js";
import { getHackeps } from "src/services/EventService";

const Home = () => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);

  useEffect(() => {
    async function getDates() {
      try {
        const response = await getHackeps();
        if (response && response.start_date && response.end_date) {
          const start = new Date(response.start_date);
          const end = new Date(response.end_date);
          
          // Check if dates are valid
          if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
            setStartDate(start);
            setEndDate(end);
            return;
          }
        }
      } catch (error) {
        console.error('Failed to fetch event dates:', error);
      }
      
      // Fallback to hardcoded dates for HackEPS 2024
      const fallbackStart = new Date('2024-11-23');
      const fallbackEnd = new Date('2024-11-24');
      setStartDate(fallbackStart);
      setEndDate(fallbackEnd);
    }
    getDates();
  }, []);

  const timerActive = true;

  const events = [
    {
      time: "8:30 h - 23 de novembre",
      title: "Inici del check-in",
    },
    {
      time: "10:00 h - 23 de novembre",
      title: "Cerimònia d'obertura",
    },
    {
      time: "11:00 h - 23 de novembre",
      title: "Comença el temps de hacking",
    },
    {
      time: "15:00 h - 23 de novembre",
      title: "Finalitza el check-in",
    },
    {
      time: "11:00 h - 24 de novembre",
      title: "Finalitza el temps de hacking",
    },
    {
      time: "11:30 h - 24 de novembre",
      title: "Presentacions dels projectes",
    },
    {
      time: "14:00 h - 24 de novembre",
      title: "Cerimònia de cloenda i entrega de premis",
    },
  ];

  return (
    <div>
      <Header />
      <MainTitle />
      <CountdownTimer
        startTime={startDate}
        endTime={endDate}
        timerActive={timerActive}
      />
      <CalendarDates startDate={startDate} endDate={endDate} />
      <Schedule events={events} />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
