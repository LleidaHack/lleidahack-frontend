import React from 'react'

const NewsEventDisplay = ({title, imgPath, name}) => {

  // const imagePath = require(`../../../assets/img/news/${imgPath}`).default;
  const imagePathTest = `../../../imgs/${imgPath}`;

  return (
    <div>
        <img src={imagePathTest} alt={name}/>
        <p>{title}</p>
    </div>
  )
}

export default NewsEventDisplay
