import React from "react";
import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import { SearchProvider } from "src/context/SearchContext";

const NewsLanding = () => {
  return (
    <div>
      <SearchProvider>
        <Navbar />
        <Footer />
      </SearchProvider>
    </div>
  );
};

export default NewsLanding;
