import React from "react";
import Header from "src/components/hackeps/Header/Header";
import Footer from "src/components/hackeps/Footer/Footer";
import InscripcioMentorForm from "src/components/hackeps/Inscripcio/InscripcioMentor";

const InscripcioMentor = () => {
  return (
    <div>
      <Header />
      <InscripcioMentorForm />
      <Footer />
    </div>
  );
};

export default InscripcioMentor;
