import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeroSectionHeader from "src/components/landing/HeroSectionHeader/HeroSectionHeader";
import AboutUsHome from "src/components/landing/AboutUsHome/AboutUsHome";
import Colaborations from "src/components/landing/Colaborations/Colaborations";
import NewsAndEventsSection from "src/components/landing/NewsAndEventSection/newsAndEvents";

const HomeLanding = () => {
  return (
    <div id="HomeLanding">
      <Navbar />
      <HeroSectionHeader />
      <AboutUsHome />
      <NewsAndEventsSection/>
      <Colaborations />
      <Footer />
    </div>
  );
};
export default HomeLanding;
