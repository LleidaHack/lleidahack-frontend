import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeroSectionHeader from "src/components/landing/HeroSectionHeader/HeroSectionHeader";
import EventCard_two from "src/components/event_cards/eventCard_two/eventCard_two";

const HomeLanding = () => {
  return (
    <div>
      <EventCard_two></EventCard_two>
      <Navbar />
      <HeroSectionHeader />
      <Footer />
    </div>
  );
};
export default HomeLanding;
