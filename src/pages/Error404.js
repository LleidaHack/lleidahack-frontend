import React from "react";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Error404_container from "src/components/Error404/Error404_container";


const Error404 = () => {
  return (
    <div>
      <Header />
      <Error404_container />
      <Footer />
    </div>
  );
};

export default Error404;
