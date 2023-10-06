import React, { useEffect, useState } from "react";
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
  

  return (
    <div className="valerr">
      <div className="iconBox">
        <div>
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            {" "}
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />{" "}
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
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
