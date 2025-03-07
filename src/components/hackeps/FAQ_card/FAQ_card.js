import React from "react";

const FAQCard = ({ question, answer }) => {
  return (
    <div className="px-3 py-3 rounded-lg shadow-md flex flex-col text-left hover:scale-110 transition-transform duration-300 h-48 bg-white m-2 ">
      <h3 className="text-2xl font-bold text-primaryHackeps">{question}</h3>
      <p className="text-sm	text-black">{answer}</p>
    </div>
  );
};

export default FAQCard;
