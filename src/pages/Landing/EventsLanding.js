import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeaderEvents from "src/components/landing/HeaderEvents/HeaderEvents";
import HeaderEventsLinks from "src/components/landing/HeaderEvents/HeaderEventsLinks";
import PrincipalEvents from "src/components/landing/EventsSections/PrincipalEvents";
import SecondaryEvents from "src/components/landing/EventsSections/SecondaryEvents";
import { SearchProvider } from "src/context/SearchContext";


const EventsLanding = () => {
  return (
    <div>
      <SearchProvider>
        <Navbar />
        <HeaderEvents title={"Events"}/>
        <HeaderEventsLinks />
        <PrincipalEvents />
        <SecondaryEvents />
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default EventsLanding;
