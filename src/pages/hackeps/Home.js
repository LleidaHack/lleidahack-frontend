import React, { useEffect, useState } from "react";
import Header from "src/components/hackeps/Header/Header.js";
import Footer from "src/components/hackeps/Footer/Footer.js";
import CalendarDates from "src/components/hackeps/Home/Calendar.js";
import Sponsors from "src/components/hackeps/Home/Sponsors.js";
import Schedule from "src/components/hackeps/Home/Schedule.js";
import HeroSection from "src/components/hackeps/Home/HeroSection/HeroSection.js";
import Mentoring from "src/components/hackeps/Home/Mentoring.js";
import { getHackeps } from "src/services/EventService";
import Animation from "src/pages/hackeps/Animation.js";

const Home = () => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const minimalTime = 2 * 60 * 60 * 1000;
    console.log(process.env.REACT_APP_HERO_ANIMATED);
    if (process.env.REACT_APP_HERO_ANIMATED == "1") {
      const lastAnimation = localStorage.getItem("lastAnimation");
      const now = Date.now();
      if (!lastAnimation || now - Number(lastAnimation) >= minimalTime) {
        setShowAnimation(true);
        localStorage.setItem("lastAnimation", now);
      }
    }
  }, []);

  useEffect(() => {
    async function getDates() {
      const response = await getHackeps();
      const start = new Date(response.start_date);
      start.setMonth(start.getMonth());
      const end = new Date(response.end_date);
      localStorage.setItem("event", response);
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

  if (!showAnimation) {
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
  } else {
    return (
      <div>
        <Animation
          initialDate={startDate}
          finalDate={endDate}
          activeTimer={timerActive}
        />
      </div>
    );
  }
};

export default Home;
