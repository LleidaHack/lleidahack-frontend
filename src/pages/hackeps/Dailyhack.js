import React from "react";
import Header from "src/components/hackeps/Header/Header";
import Footer from "src/components/hackeps/Footer/Footer";
import Dailyhacks from "src/components/hackeps/Dailyhack/DailyHacks";

const Dailyhack = () => {
  return (
    <div>
      <Header />
      <Dailyhacks />
      <Footer />
    </div>
  );
};

export default Dailyhack;
