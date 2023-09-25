import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Contacte from "src/pages/Contacte";
import Error404 from "src/pages/Error404";
import FAQPage from "src/pages/FAQ";
import Home from "src/pages/Home";
import Profile from "src/pages/Profile.js";
import HackerForm from "src/pages/HackerSignup";
import Testing from "src/components/others/Testing";
import Inscripcio from "src/pages/Inscripcio";
import Sponsors from "src/pages/Sponsors";
import Login from "src/pages/Login";
import Entrances from "src/pages/UsersEntrance.js";
import Dailyhack from "src/pages/Dailyhack.js";
import RequireAuth from "src/modules/RequireAuth";
import ResetPassword from "./pages/ResetPassword";
import PasswordForget from "./pages/ForgetPassword";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Hace el scroll hacia arriba cuando cambia de página
  }, []);

  // Simulación de detección de token caducado

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
          <Route path="/confirm-password" element={<ResetPassword />} />
          <Route path="/hacker-form" element={<HackerForm />} />
          <Route path="/entrance" element={<Entrances />} />
          <Route path="/testing" element={<Testing />} />
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
          <Route path="*" element={<Error404 />} />
          <Route path="/forget-password" element={<PasswordForget />} />
        </Routes>
      </Router>
    </div>
  );
}
