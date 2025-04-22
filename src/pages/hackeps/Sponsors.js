import Header from "src/components/hackeps/Header/Header.js";
import Footer from "src/components/hackeps/Footer/Footer.js";
import IfSponsors from "src/components/hackeps/Sponsors/IfSponsors.js";
import React from "react";
import { useParams } from "react-router-dom";

const Sponsors = () => {
  const { ids } = useParams();
  const sponsorId = ids || 0;

  return (
    <div>
      <Header />
      <IfSponsors id={sponsorId} />
      <Footer />
    </div>
  );
};

export default Sponsors;
