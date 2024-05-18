import React from 'react'

const NewsEventDisplay = ({title, imgPath, name}) => {

  // const imagePath = require(`../../../assets/img/news/${imgPath}`).default;
  const imagePathTest = `../../../imgs/${imgPath}`;

  return (
    <div className='w-full py-1 '>
      <div className='flex p-2 bg-white shadow h-32'>
          <img src={imagePathTest} alt={name} className='w-1/2 mx-1 bg-linkLanding'/>
           <p className='w-1/2 mx-1'>{title}</p>
      </div>

    </div>
  )
}

export default NewsEventDisplay
