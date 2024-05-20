import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeroSectionHeader from "src/components/landing/HeroSectionHeader/HeroSectionHeader";
import IC_LleidaHack from "src/components/icons/IC_LleidaHack";
import IC_Sign_In from "src/components/icons/IC_Sign_In";
import IC_Languages from "src/components/icons/IC_Languages";
const HomeLanding = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionHeader />
      <Footer />
    </div>
  );
};
export default HomeLanding;
