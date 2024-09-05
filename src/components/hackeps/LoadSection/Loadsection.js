import React from "react";
import "src/components/hackeps/LoadSection/LoadSection.css";

const LoadSection = () => {
  return (
    <div className="valerre bg-secondaryHackeps flex justify-center items-center">
      <div className="loader">
        <svg className="circular-loader" viewBox="25 25 50 50">
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <h2 className="ellipsis-dots title2">Carregant</h2>
    </div>
  );
};

export default LoadSection;
