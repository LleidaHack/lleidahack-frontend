import React from "react";
import "src/components/hackeps/FAQ_card/FAQ_card.css"; // Agregar el archivo de estilos CSS para FAQCard

const FAQCard = ({ question, answer }) => {
  return (
    <div className="faq-card shadow-faq bg-white p-5 rounded-lg flex-1 flex flex-col m-1 text-left ">
      <h3 className="question text-primaryHackeps text-xl font-bold ">{question}</h3>
      <p className="answer text-black text-sm">{answer}</p>
    </div>
  );
};

export default FAQCard;
