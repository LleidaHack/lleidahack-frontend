import React from "react";
import logoLleidaHack from "../../../imgs/hackers_group.jpg";
import { Link } from "react-router-dom";
const NewsEventDisplay = ({ title, imgPath, name }) => {
  // const imagePath = require(`../../../assets/img/news/${imgPath}`).default;
  const imagePathTest = `../../../imgs/${imgPath}`;

  return (
    <div className="w-full py-1 ">
      <Link to="news/`${name}`" className="no-underline text-secondaryLanding">
        <div className="flex p-3 bg-white shadow h-32">
          <img src={logoLleidaHack} alt={name} className="w-1/2 mx-1" />
          <p className="w-1/2 mx-1">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewsEventDisplay;
