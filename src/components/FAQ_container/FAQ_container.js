import React, { useEffect } from 'react';
import FAQCard from '../FAQ_card/FAQ_card';
import './FAQ_container.css'; // Importa el archivo de estilos CSS para FAQContainer

const FAQContainer = ({ faqs }) => {

  useEffect(() => {
    // Coloca el scroll en la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);


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
