import React from "react";

const FAQCard = ({ question, answer }) => {
  return (
    <div className="p-4 rounded-lg shadow-md flex flex-col text-left hover:scale-110 transition-transform duration-300 m-1 h-52 bg-white">
      <h3 className="text-2xl font-bold text-primaryHackeps">{question}</h3>
      <p className="text-sm	text-black">{answer}</p>
    </div>
  );
};

export default FAQCard;
