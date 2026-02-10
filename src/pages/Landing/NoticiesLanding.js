import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
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
