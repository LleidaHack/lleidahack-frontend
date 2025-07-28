import React, { useEffect, useState } from "react";
import Header from "src/components/hackeps/Header/Header.js";
import Footer from "src/components/hackeps/Footer/Footer.js";
import CalendarDates from "src/components/hackeps/Home/Calendar.js";
import Sponsors from "src/components/hackeps/Home/Sponsors.js";
import Schedule from "src/components/hackeps/Home/Schedule.js";


import HeroSection from "src/components/hackeps/Home/HeroSection/HeroSection.js";
import Mentoring from "src/components/hackeps/Home/Mentoring.js";
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
      time: "8:30 h",
      title: "Inici del check-in",
      description: "Arribada i registre dels participants",
    },
    {
      time: "10:00 h",
      title: "Cerimònia d'obertura",
      description: "Benvinguda i presentació de l'esdeveniment",
    },
    {
      time: "11:00 h",
      title: "Comença el temps de hacking",
      description: "Inici oficial del hackathon",
    },
    {
      time: "15:00 h",
      title: "Finalitza el check-in",
      description: "Tancament del registre per als participants",
    },
    {
      time: "11:00 h",
      title: "Finalitza el temps de hacking",
      description: "Tancament del període de desenvolupament dels projectes",
    },
    {
      time: "11:30 h",
      title: "Presentacions dels projectes",
      description:
        "Presentació dels projectes desenvolupats durant el hackathon",
    },
    {
      time: "14:00 h",
      title: "Cerimònia de cloenda i entrega de premis",
      description: "Cloenda del hackathon i entrega de premis als guanyadors",
    },
  ];

  return (
    <div>
      <Header />
      <HeroSection 
        initialDate={startDate}
        finalDate={endDate}
        activeTimer={timerActive}
      />
      <CalendarDates startDate={startDate} endDate={endDate} />
      <Schedule events={events} />
      <Sponsors />
      <Mentoring />
      <Footer />
    </div>
  );
};

export default Home;
