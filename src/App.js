import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Contacte from "src/pages/hackeps/Contacte";
import Error404 from "src/pages/hackeps/Error404";
import FAQPage from "src/pages/hackeps/FAQ";
import Home from "src/pages/hackeps/Home";
import HomeLanding from "./pages/Landing/HomeLanding";
import Profile from "src/pages/hackeps/Profile.js";
import HackerForm from "src/pages/hackeps/HackerSignup";
import { LleidaHackerForm } from "src/components/hackeps/Forms/LleidaHackerForm.js";
import Testing from "src/components/hackeps/Testing/Testing";
import Terms from "src/pages/hackeps/Terms";
import Privacy from "src/pages/hackeps/Privacy";
import Inscripcio from "src/pages/hackeps/Inscripcio";
import Sponsors from "src/pages/hackeps/Sponsors";
import Verify from "./pages/hackeps/Verify";
import Login from "src/pages/hackeps/Login";
import Entrances from "src/pages/hackeps/UsersEntrance.js";
import RequireAuth from "src/modules/RequireAuth";
import RequireLleidahacker from "./modules/RequireLleidahacker";
import ResetPassword from "./pages/hackeps/ResetPassword";
import PasswordForget from "./pages/hackeps/ForgetPassword";
import "src/utils/ensure-basename";
import { refreshToken } from "./services/AuthenticationService";
import LoginVerify from "./pages/hackeps/LoginVerify";
import EventsLanding from "./pages/Landing/EventsLanding";
import LegalInfoLanding from "./pages/Landing/LegalInfoLanding";
import Error404Landing from "./pages/Landing/Error404Landing";
import Dashboard from "./pages/Administrator/Dashboard";
import EventsDash from "./pages/Administrator/EventsDash";
import JuntaPage from "./pages/Administrator/JuntaPage";
import DevsPage from "./pages/Administrator/DevsPage";
import MarketingPage from "./pages/Administrator/MarketingPage";
import ContactesPage from "./pages/Administrator/ContactesPage";
import TechmeetingPage from "./pages/Administrator/TechmeetingPage";
import AdminPanelPage from "./pages/Administrator/AdminPanelPage";
import LleidaHacker from "./pages/Administrator/LleidaHacker";
import HackepsDashboardPage from "./pages/Administrator/HackepsDashboardPage";
import NewsLanding from "./pages/Landing/NewsLanding";

import "src/styles/styles.css";
import ConfirmAssistancePage from "./pages/hackeps/Confirm";
import Hacking from "./pages/hackeps/Hacking";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace el scroll hacia arriba cuando cambia de página
  }, []);

  // if (!window.location.pathname.includes("/hackeps")) {
  //   window.history.replaceState("", "", "/hackeps" + window.location.pathname);
  // } //comentada autoredirección a /hackeps

  // Simulación de detección de token caducado
  setInterval(refreshToken, 1000 * 60 * 12);

  return (
    <div className="App">
      <Router basename="/hackeps">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/perfil"
            element={
              <RequireAuth originalRoute="/perfil">
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/perfil/:hacker_id"
            element={
              <RequireAuth originalRoute="/perfil">
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/validate-email/" element={<Verify />} />
          <Route path="/confirm-password" element={<ResetPassword />} />
          <Route path="/hacker-form" element={<HackerForm />} />
          <Route path="/entrance" element={<Entrances />} />
          {/*<Route path="/testing" element={<Testing />} />*/}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sponsors" element={<Sponsors defaultId={0} />} />
          <Route path="/sponsors/:ids" element={<Sponsors />} />
          <Route path="/lleidahacker-form" element={<LleidaHackerForm />} />
          <Route
            path="/inscripcio"
            element={
              <RequireAuth originalRoute="/inscripcio">
                <Inscripcio />
              </RequireAuth>
            }
          />
          <Route path="/forgot-password" element={<PasswordForget />} />
          <Route path="/user-verification" element={<LoginVerify />} />
          <Route path="/assistance" element={<ConfirmAssistancePage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/hacking" element={<Hacking />} />
        </Routes>
      </Router>

      <Router basename="/lleidahack">
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeLanding />} />
          <Route path="*" element={<Error404Landing />} />
          <Route path="/events" element={<EventsLanding />} />
          <Route path="/noticies" element={<NewsLanding />} />
          <Route path="/legalinfo" element={<LegalInfoLanding />} />
        </Routes>
      </Router>
      <Router basename="/admin">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<EventsDash />} />
          <Route path="/grups/junta" element={<JuntaPage />} />
          <Route path="/grups/devs" element={<DevsPage />} />
          <Route path="/grups/marketing" element={<MarketingPage />} />
          <Route path="/grups/contactes" element={<ContactesPage />} />
          <Route path="/grups/techmeetings" element={<TechmeetingPage />} />
          <Route path="/grups/admin-panel" element={<AdminPanelPage />} />
          <Route path="/lleidahacker/:id" element={<LleidaHacker />} />
          <Route path="/hackeps-dashboard" element={<HackepsDashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}
