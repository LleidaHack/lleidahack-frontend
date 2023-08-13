import React from 'react';
import FAQCard from 'src/components/FAQ_card/FAQ_card';
import 'src/components/FAQ_container/FAQ_container.css'; // Importa el archivo de estilos CSS para FAQContainer

const FAQContainer = ({ faqs }) => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs</h1>
      <div className="row">
        {faqs.map((faq, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <FAQCard question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQContainer;
