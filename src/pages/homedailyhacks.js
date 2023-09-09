import React from "react";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import HOMEDHKS from "src/components/Dailyhack/main/mainDailyhack.js"


const Dailyhack = () => {
    return (
      <div>
        <Header />
        <HOMEDHKS />
        <Footer />
      </div>
    );
};
  
  export default Dailyhack;