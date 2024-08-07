import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import Error404 from "src/components/landing/Error404/Error404";

const Error404Landing = () => {
  return (
    <div>
      <Navbar />
      <Error404 />
      <Footer />
    </div>
  );
};

export default Error404Landing;
