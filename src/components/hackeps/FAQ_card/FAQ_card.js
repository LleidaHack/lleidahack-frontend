import React from "react";
import "src/components/hackeps/FAQ_card/FAQ_card.css"; // Agregar el archivo de estilos CSS para FAQCard

const FAQCard = ({ question, answer }) => {
  return (
    <div className="faq-card bg-white">
      <h3 className="text-2xl font-bold text-primaryHackeps">{question}</h3>
      <p className="text-sm	text-black">{answer}</p>
    </div>
  );
};

export default FAQCard;
