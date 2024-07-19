import React from "react";
import Header from "src/components/hackeps/Header/Header";
import Footer from "src/components/hackeps/Footer/Footer";
import Error404Container from "src/components/hackeps/Error404/Error404Container";

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
