import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import PrincipalEvents from "src/components/landing/EventsSections/PrincipalEvents";
import SecondaryEvents from "src/components/landing/EventsSections/SecondaryEvents";
import GeneralHeader from "src/components/landing/GeneralHeader/GeneralHeader";

const EventsLanding = () => {
  const links = [
    { label: 'Destacat', url: '#' },
    { label: 'Últims events', url: '#' },
    { label: 'Propers events', url: '#' },
  ];

  return (
    <div>
      <Navbar />
      <GeneralHeader sectionName="Esdeveniments" category="events" allowSearch={true} hasFilters={true} links={links} />
      <PrincipalEvents />
      <SecondaryEvents />
      <Footer />
    </div>
  );
};

export default EventsLanding;
