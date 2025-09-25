import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeaderEvents from "src/components/landing/HeaderEvents/HeaderEvents";
import SecondaryEvents from "src/components/landing/EventsSections/SecondaryEvents";
import NoticiesSection from "src/components/landing/NoticiesMain/NoticiesSection";
import HeaderNoticies from "src/components/landing/HeaderNoticies/HeaderNoticies";

const NoticiesLanding = () => {
  return (
    <div>
      <Navbar />
      <HeaderNoticies />
      <NoticiesSection />
      <Footer />
    </div>
  );
};

export default NoticiesLanding;
