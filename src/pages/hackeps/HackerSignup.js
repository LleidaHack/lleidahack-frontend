import React from "react";
import Header from "src/components/hackeps/Header/Header";
import Footer from "src/components/hackeps/Footer/Footer";
import { HackerStepperForm } from "src/components/hackeps/Forms/HackerForm";

const HackerForm = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <HackerStepperForm />
      <Footer />
    </div>
  );
};

export default HackerForm;
