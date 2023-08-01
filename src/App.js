import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacte from "./pages/Contacte";
import Error404 from "./pages/Error404";
import FAQPage from "./pages/FAQ";
import Home from "./pages/Home";
import React, { useEffect } from 'react';
import Profile from "./pages/Profile/index.js"

export default function App() {
    useEffect(() => {
      window.scrollTo(0, 0); // Hace el scroll hacia arriba cuando cambia de página
    }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
