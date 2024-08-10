import {React, useEffect} from "react";
import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import AboutUs from "src/components/landing/AboutUs/AboutUs";

const AboutUsLanding = () => {

    return(
        <div>
            <Navbar />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default AboutUsLanding;