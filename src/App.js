import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Home/Header";
import Contacte from "./components/others/Contacte";
import Error404 from "./components/others/Error404";
import './App.css';
import Footer from "./components/Home/Footer";

import Profile from "./Pages/Profile";
import Main from "./Pages/Main";

import FAQ from "./components/others/FAQ";


export default function App() {
    return (
        <div className="App">
            <Router>
                {/* Render Header, this might cause to show IN ALL PAGES*/}
                <Header inside={[
                    { name: 'Home', url: '/' },
                    { name: 'Dates', url: 'Timetable' },
                    { name: 'Sponsors', url: 'Sponsors' }


                ]} outsides={[
                    { name: 'FAQ', url: '/FAQ' },
                    { name: 'Contacte', url: '/Contacte' }
                ]} />

                {/* TODO: Fix this crap of 33px */}
                <div style={{marginTop: `33px`}}>
                   <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/FAQ" element={<FAQ />} />
                    <Route exact path="/Contacte" element={<Contacte />} />
                    <Route exact path="/Perfil" element={<Profile />} />
                    <Route path="*" element={<Error404 />} />
                    </Routes>  
                </div>
               
                {/* Render Footer, this might cause to show IN ALL PAGES*/}
                <Footer inside={[
                    { name: 'Home', url: '/' },
                    { name: 'Dates', url: 'Timetable' },
                    { name: 'Sponsors', url: 'Sponsors' }


                ]} outsides={[
                    { name: 'FAQ', url: '/FAQ' },
                    { name: 'Contacte', url: '/Contacte' }
                ]} />
            </Router>
        </div>
    );
}
