import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeroSectionHeader from "src/components/landing/HeroSectionHeader/HeroSectionHeader";
import NewsVerticalDisplay from "src/components/landing/NewsVerticalDisplay/NewsVerticalDisplay";
const HomeLanding = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionHeader />
      <NewsVerticalDisplay />
      <Footer />
    </div>
  );
};
export default HomeLanding;
