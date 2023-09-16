import React from "react";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import { HackerStepperForm } from "src/components/Forms/HackerForm";

const HackerForm = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <HackerStepperForm />
      <Footer />
    </div>
  );
};

export default HackerForm;
  