import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeaderEvents from "src/components/landing/HeaderEvents/HeaderEvents";
import HeaderEventsLinks from "src/components/landing/HeaderEvents/HeaderEventsLinks";
import PrincipalEvents from "src/components/landing/EventsSections/PrincipalEvents";
import SecondaryEvents from "src/components/landing/EventsSections/SecondaryEvents";

const EventsLanding = () => {
  return (
    <div>
     
        <Navbar />
        <HeaderEvents />
        <HeaderEventsLinks />
        <PrincipalEvents />
        <SecondaryEvents />
        <Footer />
      
    </div>
  );
};

export default EventsLanding;
