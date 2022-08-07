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


export default function App() {
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
            <CalendarDates />
            <Sponsors />
            <Footer />

        </div>
    );
}