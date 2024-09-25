import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "src/components/Feedbacks/FeedbackStyle.css";

const SuccessFeedback = ({
  title,
  text,
  hasButton,
  buttonLink,
  buttonText,
  onButtonClick,
}) => {
  const formattedText = text.split("\n").map((item, index) => (
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
        <i className="mt-48 mb-6 fa-regular fa-circle-check text-8xl"></i>
        <h2>{title}</h2>
        <p>{formattedText}</p>
        <p></p>
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

export default SuccessFeedback;
