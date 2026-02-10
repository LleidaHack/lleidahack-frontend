import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import IntroSection from "src/components/landing/QuiSom/IntroSection";
import TeamSection from "src/components/landing/QuiSom/TeamSection";

const QuiSomLanding = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <TeamSection />
      <Footer />
    </div>
  );
};
export default QuiSomLanding;
