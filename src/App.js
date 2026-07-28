import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import PacManEasterEgg from "./components/PacManEasterEgg/PacManEasterEgg";
import HomeLanding from "./pages/Landing/HomeLanding";
import Dashboard from "./pages/Administrator/Dashboard";
import { refreshToken } from "./services/AuthenticationService";
import LegalInfoLanding from "./pages/Landing/LegalInfoLanding";
import ContactLanding from "./pages/Landing/ContactLanding";
import Error404Landing from "./pages/Landing/Error404Landing";
import QuiSomLanding from "./pages/Landing/QuiSomLanding";
import "src/styles/styles.css";
import LleidaHackerHome from "./components/lleidahacker/Sections/LleidaHackerHomeSection";
import WorkGroupsSection from "./components/lleidahacker/Sections/WorkGroupsSection";
import EventsSection from "./components/lleidahacker/Sections/EventsSection";
import AdminSection from "./components/lleidahacker/Sections/AdminSection";
import LoginAdmin from "src/pages/Administrator/LoginAdmin";
import EventDetail from "src/components/lleidahacker/Sections/EventDetail";

const SPLASH_KEY = "llh_splash_ts";
const SPLASH_COOLDOWN = 24 * 60 * 60 * 1000; // 24 h en ms

function shouldShowSplash() {
  try {
    const last = localStorage.getItem(SPLASH_KEY);
    if (!last) return true;
    return Date.now() - parseInt(last, 10) > SPLASH_COOLDOWN;
  } catch {
    return true;
  }
}

export default function App() {
  const [showSplash, setShowSplash] = useState(() => shouldShowSplash());

  // Bloqueja/desbloqueja el scroll del document durant la splash
  useEffect(() => {
    if (showSplash) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [showSplash]);

  const handleSplashFinish = useCallback(() => {
    try {
      localStorage.setItem(SPLASH_KEY, Date.now().toString());
    } catch {}
    setShowSplash(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Refresca el token cada 12 minuts
  useEffect(() => {
    const intervalId = setInterval(refreshToken, 1000 * 60 * 12);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App overflow-x-hidden">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <Router basename="/">
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeLanding />} />
          <Route path="/contacte" element={<ContactLanding />} />
          <Route path="/legalinfo" element={<LegalInfoLanding />} />
          <Route path="/qui-som" element={<QuiSomLanding />} />
          <Route path="/*" element={<Error404Landing />} />
        </Routes>
      </Router>

      <Router basename="/admin">
        <Routes>
          <Route index element={<Dashboard section={<LleidaHackerHome />} />} />
          <Route
            path="/workgroups"
            element={<Dashboard section={<WorkGroupsSection />} />}
          />
          <Route
            path="/events"
            element={<Dashboard section={<EventsSection />} />}
          />
          <Route
            path="/event/:eventId"
            element={<Dashboard section={<EventDetail />} />}
          />
          <Route
            path="/administration"
            element={<Dashboard section={<AdminSection />} />}
          />
          <Route path="/login" element={<LoginAdmin />} />
        </Routes>
      </Router>
      <PacManEasterEgg />
    </div>
  );
}
