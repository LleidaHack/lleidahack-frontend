import React from 'react';
import './FAQ_card.css'; // Agregar el archivo de estilos CSS para FAQCard

const FAQCard = ({ question, answer }) => {
  return (
    <div className="faq-card">
      <h3 className="question">{question}</h3>
      <p className="answer">{answer}</p>
    </div>
  );
};

export default FAQCard;