import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "src/components/hackeps/Feedbacks/FeedbackStyle.css";
import Button from "src/components/buttons/Button";

const SuccessFeedback = ({
  title,
  text,
  italics,
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
        <i className="mt-1 mb-6 fa-regular fa-circle-check text-8xl"></i>
        <h2>{title}</h2>
        <p>{formattedText}</p>
        <p>
          <i>{italics}</i>
        </p>
      </div>
      {hasButton ? (
        <div className="text-center mb-14">
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

export default SuccessFeedback;
