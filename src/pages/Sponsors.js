import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import IfSponsors from "../components/Sponsors/IfSponsors.js";
import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { ids } = useParams();
  console.log("ID desde la ruta:", ids);
  const sponsorId = ids || 0;

  return (
    <div>
      <Header />
      <IfSponsors id={sponsorId} />
      <Footer />
    </div>
  );
};

export default Home;
