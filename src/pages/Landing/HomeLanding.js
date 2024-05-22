import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeroSectionHeader from "src/components/landing/HeroSectionHeader/HeroSectionHeader";
import NewsVerticalDisplay from "src/components/landing/NewsVerticalDisplay/NewsVerticalDisplay";
import EventSection from "src/components/landing/EventsSection/EventsSection";

const HomeLanding = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionHeader />
      <NewsVerticalDisplay />
      <EventSection />
      <Footer />
    </div>
  );
};
export default HomeLanding;
