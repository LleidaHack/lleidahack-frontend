import React, { useEffect } from "react";
import FAQCard from "src/components/FAQ_card/FAQ_card";
import "src/components/FAQ_container/FAQ_container.css"; // Importa el archivo de estilos CSS para FAQContainer

const FAQContainer = ({ faqs }) => {
  useEffect(() => {
    // Coloca el scroll en la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-container bg-secondaryHackeps">
      <TitleGeneralized underline>FAQs</TitleGeneralized>
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
