import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import HomeLanding from "./pages/Landing/HomeLanding";
import Dashboard from "./pages/Administrator/Dashboard";
import { refreshToken } from "./services/AuthenticationService";
import EventsLanding from "./pages/Landing/EventsLanding";
import LegalInfoLanding from "./pages/Landing/LegalInfoLanding";
import ContactLanding from "./pages/Landing/ContactLanding";
import Error404Landing from "./pages/Landing/Error404Landing";
import NoticiesLanding from "./pages/Landing/NoticiesLanding";
import "src/styles/styles.css";
import LleidaHackerHome from "./components/lleidahacker/Sections/LleidaHackerHomeSection";
import WorkGroupsSection from "./components/lleidahacker/Sections/WorkGroupsSection";
import EventsSection from "./components/lleidahacker/Sections/EventsSection";
import AdminSection from "./components/lleidahacker/Sections/AdminSection";
import LoginAdmin from "src/pages/Administrator/LoginAdmin";
import EventDetail from "src/components/lleidahacker/Sections/EventDetail";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace el scroll hacia arriba cuando cambia de página
  }, []);

  useEffect(() => {
    const intervalId = setInterval(refreshToken, 1000 * 60 * 12);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App overflow-x-hidden">
      <Router basename="/lleidahack">
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeLanding />} />
          <Route path="/contacte" element={<ContactLanding />} />
          <Route path="/events" element={<EventsLanding />} />
          <Route path="/legalinfo" element={<LegalInfoLanding />} />
          <Route path="/noticies" element={<NoticiesLanding />} />
          <Route path="*" element={<Error404Landing />} />
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
    </div>
  );
}
