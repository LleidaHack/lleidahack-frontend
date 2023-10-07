import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/components/Feedbacks/FeedbackStyle.css";

//El onButtonClick es per a que des de on es truca al component, indicar-li si al clicar el boto, es necesita que s'executi alguna funcio en concret.
//La funció ha d'estar al lloc on es crida a la component. (Exemple al component de Contacte.js)
//si hasButton es false, no fa falta indicar-hhi el buttonLink i el buttonText

const FailFeedback = ({
  title,
  text,
  hasButton,
  buttonLink,
  buttonText,
  italic,
  onButtonClick,
}) => {
  const formattedText = text.split("\n").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));

  const italicFormated = italic.split("\n").map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));

  useEffect(() => {
    // Coloca el scroll en la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div className="valerr">
      <div className="iconBox">
        <div>
          <svg
            className="crossmarker"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="cross__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark_check"
              fill="none"
              d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"
            />
          </svg>
        </div>
        <h2>{title}</h2>
        <p>{formattedText}</p>
        <p>
          <i>{italicFormated}</i>
        </p>
      </div>
      {hasButton ? (
        <div className="infbuttonok">
          <Link to={buttonLink}>
            <button onClick={onButtonClick} className="contacta">
              {buttonText}
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FailFeedback;
