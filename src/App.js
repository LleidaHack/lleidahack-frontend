import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacte from "./pages/Contacte";
import Error404 from "./pages/Error404";
import FAQPage from "./pages/FAQ";
import './App.css';
import Home from "./pages/Home";

export default function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
