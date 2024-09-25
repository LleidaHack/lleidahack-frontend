import React, { useEffect, useState } from "react";
import Header from "src/components/Header/Header.js";
import Footer from "src/components/Footer/Footer.js";
import CalendarDates from "src/components/Home/Calendar.js";
import Sponsors from "src/components/Home/Sponsors.js";
import Schedule from "src/components/Home/Schedule.js";
import CountdownTimer from "src/components/Home/Timer.js";
import MainTitle from "src/components/Home/MainTitle.js";
import { getHackeps } from "src/services/EventService";

const Home = () => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);

  useEffect(() => {
    async function getDates() {
      const response = await getHackeps();
      const start = new Date(response.start_date);
      start.setMonth(start.getMonth());
      const end = new Date(response.end_date);
      end.setMonth(end.getMonth());
      setStartDate(start);
      setEndDate(end);
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
      title: "Começa el temps de hacking",
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
