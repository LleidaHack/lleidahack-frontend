import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./components/Home/Header";
import Contacte from "./components/others/Contacte";
import Error404 from "./components/others/Error404";
import FAQ from "./components/others/FAQ";
import './App.css';
import CalendarDates from "./components/Home/Calendar";
import Footer from "./components/Home/Footer";
import Testing from "./components/others/Testing";
import Sponsors from "./components/Home/Sponsors";
import Schedule from "./components/Home/Schedule"
import QrCode from "./components/Home/QrCode";
import CountdownTimer from "./components/Home/Timer";

export default function App() {
    const startDate = new Date(2022, 10, 25);
    const endDate = new Date(2022, 10, 27);
    const startTime = new Date(2022, 10, 25, 11);
    const endTime = new Date(2022, 10, 26, 11);
    const timerActive = false;
    
 
    return(
        <div className="App">

             <Router>
                <Routes>
                    <Route exact path="/" element = {<FAQ />}/>
                    <Route exact path="/FAQ" element = {<FAQ />}/>
                    <Route exact path="/Contacte" element = {<Contacte />}/>
                    <Route path="*" element = {<Error404 />}/>
          </Routes>
          </Router>
            <Testing></Testing>
            <Router>
                 <Routes>
                    <Route exact path="/" element = {<FAQ />}/>
                    <Route exact path="/FAQ" element = {<FAQ />}/>
                    <Route exact path="/Contacte" element = {<Contacte />}/>
                    <Route path="*" element = {<Error404 />}/>
                 </Routes>
            </Router>
        </div>
    );
}
