import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import NoticiaSection from "src/components/landing/NoticiesMain/NoticiaSection";


const NoticiaLanding = () => {
  return (
    <div>
      <Navbar />
      <NoticiaSection />
      <Footer />
    </div>
  );
};

export default NoticiaLanding;
