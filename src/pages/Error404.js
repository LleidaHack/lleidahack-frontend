import React from "react";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Error404Container from "src/components/Error404/Error404Container";

const Error404 = () => {
  return (
    <div>
      <Header />
      <Error404Container />
      <Footer />
    </div>
  );
};

export default Error404;
