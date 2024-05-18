import React from 'react'
import NewsEventDisplay from '../NewsEventDisplay/NewsEventDisplay'

const NewsVerticalDisplay = () => {
  return (
    <div className='w-1/4 p-5'>
      <div className=''>
        <h2 className='bg-secondaryLanding text-CTALanding text-center p-1'>NOTICIES</h2>
        <NewsEventDisplay title="lorem ipsum" imgPath="hackers_group.jpg" name="test"/>
        <NewsEventDisplay title="lorem ipsum" imgPath="hackers_group.jpg" name="test"/>
        <NewsEventDisplay title="lorem ipsum" imgPath="hackers_group.jpg" name="test"/>
        <a href='/news/{path}' className='text-primaryLanding no-underline'>Veure més...</a>
        </div>
    </div>
  ) 
}

export default NewsVerticalDisplay
