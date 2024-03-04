import React, { useState } from "react";
import "src/components/Sponsors/Others/UserCircle.css";

const UserCircle = ({ imageSrc, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="circle-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="popup-icon">
        <img src={imageSrc} alt="Usuario" />
      </div>
      <div className="popup-name">{name}</div>
      <div className="popup-description">{description}</div>
    </div>
  );
};

export default UserCircle;
