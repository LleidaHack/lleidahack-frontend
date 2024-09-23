import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "src/components/hackeps/Feedbacks/FeedbackStyle.css";
import Button from "src/components/buttons/Button";

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
    <div className="valerr bg-secondaryHackeps text-textSecondaryHackeps">
      <div className="iconBox">
        <i class="mt-48 mb-6 fa-regular fa-circle-xmark text-8xl"></i>

        <h2>{title}</h2>
        <p>{formattedText}</p>
        <p>
          <i>{italicFormated}</i>
        </p>
      </div>
      {hasButton ? (
        <div className="infbuttonok">
          <Link to={buttonLink}>
            <Button onClick={onButtonClick} primary>
              {buttonText}
            </Button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FailFeedback;
