import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeroSectionHeader from "src/components/landing/HeroSectionHeader/HeroSectionHeader";
import NewsVerticalDisplay from "src/components/landing/NewsVerticalDisplay/NewsVerticalDisplay";
import EventSection from "src/components/landing/EventsSection/EventsSection";
import AboutUsHome from "src/components/landing/AboutUsHome/AboutUsHome";
import Colaborations from "src/components/landing/Colaborations/Colaborations";
import NavLandingProvider from "src/context/NavLanding/NavLanding";
import { useNavLanding } from "src/context/NavLanding/NavLanding";

const HomeLanding = () => {
  return (
    <div id="HomeLanding">
      <NavLandingProvider>
        <Navbar />
        <HeroSectionHeader />
        <AboutUsHome />
        <NewsVerticalDisplay />
        <EventSection />
        <Colaborations />
        <Footer />
      </NavLandingProvider>
    </div>
  );
};
export default HomeLanding;
