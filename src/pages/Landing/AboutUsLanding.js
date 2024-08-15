import Navbar from  "src/components/landing/Navbar/Navbar"
import Footer from "src/components/landing/Footer/Footer";
import AboutUsMain from "src/components/landing/AboutUsMain/AboutUsMain";
import AboutUsCardContainer from "src/components/landing/AboutUsCardContainer/AboutUsCardContainer";

const AboutUsLanding = () => {
    
    return (
        <div>
            <Navbar />
            <AboutUsMain/>
            <AboutUsCardContainer/>
            <Footer />
        </div>
    )
}

export default AboutUsLanding;