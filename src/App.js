import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./components/Home/Header";
import Contacte from "./components/others/Contacte";
import Error404 from "./components/others/Error404";
import FAQ from "./components/others/FAQ";
import './App.css';
import CalendarDates from "./components/Home/Calendar";
import Footer from "./components/Home/Footer";
import Sponsors from "./components/Home/Sponsors";
import Schedule from "./components/Home/Schedule";
import CountdownTimer from "./components/Home/Timer";


export default function App() {
    const startDate = new Date(2022, 10, 25);
    const endDate = new Date(2022, 10, 27);
    const startTime = new Date(2022, 10, 25, 11);
    const endTime = new Date(2022, 10, 26, 11);
    const timerActive = false;

    const events = [
        {time: "10h", title: "Example", description: "Description"},
        {time: "11h", title: "Example", description: "Description"},
        {time: "12h", title: "Example", description: "Description"},
        {time: "14h", title: "Example", description: "Description"},
    ];
 
    return(
        <div className="App">

             <Router>
             
             <Header inside={[
            { name: 'Home', url: '/'},
            { name: 'Dates', url: 'Timetable' },
            { name: 'Sponsors', url: 'Sponsors' }
        
    
            ]} outsides={[
                { name: 'FAQ', url: '/FAQ' },
                { name: 'Contacte', url: '/Contacte' }
            ]} />
            <Routes>
                <Route exact path="/" element = {<FAQ />}/>
                <Route exact path="/FAQ" element = {<FAQ />}/>
                <Route exact path="/Contacte" element = {<Contacte />}/>
                <Route path="*" element = {<Error404 />}/>
          </Routes>
          </Router>
            <CountdownTimer startTime={startTime} endTime={endTime}  timerActive={timerActive}/>
            <Schedule events={events} />
            <CalendarDates startDate={startDate} endDate={endDate}/>
            <Sponsors />
            <Footer />
        </div>
    );
}
