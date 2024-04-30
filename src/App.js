import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Contacte from "src/pages/Contacte";
import Error404 from "src/pages/Error404";
import FAQPage from "src/pages/FAQ";
import Home from "src/pages/Home";
import Profile from "src/pages/Profile.js";
import HackerForm from "src/pages/HackerSignup";
import Testing from "src/components/Testing/Testing";
import Terms from "src/pages/Terms";
import Privacy from "src/pages/Privacy";
import Inscripcio from "src/pages/Inscripcio";
import Sponsors from "src/pages/Sponsors";
import Verify from "./pages/Verify";
import Login from "src/pages/Login";
import Entrances from "src/pages/UsersEntrance.js";
import Dailyhack from "src/pages/Dailyhack.js";
import RequireAuth from "src/modules/RequireAuth";
import RequireLleidahacker from "./modules/RequireLleidahacker";
import ResetPassword from "./pages/ResetPassword";
import PasswordForget from "./pages/ForgetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import "src/utils/ensure-basename";
import { refreshToken } from "./services/AuthenticationService";
import LoginVerify from "./pages/LoginVerify";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace el scroll hacia arriba cuando cambia de página
  }, []);

  if (!window.location.pathname.includes("/hackeps")) {
    window.history.replaceState("", "", "/hackeps" + window.location.pathname);
  }

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
          <Route path="/testing" element={<Testing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sponsors" element={<Sponsors defaultId={0} />} />
          <Route path="/sponsors/:ids" element={<Sponsors />} />
          <Route
            path="/inscripcio"
            element={
              <RequireAuth originalRoute="/inscripcio">
                <Inscripcio />
              </RequireAuth>
            }
          />
          <Route
            path="/dailyhacks"
            element={
              <RequireAuth originalRoute="/dailyhacks">
                <Dailyhack />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireLleidahacker originalRoute="/dashboard">
                <Dashboard />
              </RequireLleidahacker>
            }
          />
          <Route path="/forgot-password" element={<PasswordForget />} />
          <Route path="/user-verification" element={<LoginVerify />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}
