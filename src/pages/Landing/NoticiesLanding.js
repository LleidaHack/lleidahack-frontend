import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import SecondaryEvents from "src/components/landing/EventsSections/SecondaryEvents";
import NoticiesSection from "src/components/landing/NoticiesMain/NoticiesSection";
import GeneralHeader from "src/components/landing/GeneralHeader/GeneralHeader";

const NoticiesLanding = () => {
  return (
    <div>
      <Navbar />
      <GeneralHeader sectionName="Notícies" category="news" allowSearch={true} hasFilters={true} />
      <NoticiesSection />
      <Footer />
    </div>
  );
};

export default NoticiesLanding;
