import React from 'react'
import NewsEventDisplay from '../NewsEventDisplay/NewsEventDisplay'

const NewsVerticalDisplay = () => {
  return (
    <div>
        <h2>NOTICIES</h2>
        <NewsEventDisplay title="lorem ipsum" imgPath="hackers_group.jpg" name="test"/>
        <NewsEventDisplay title="lorem ipsum" imgPath="hackers_group.jpg" name="test"/>
        <NewsEventDisplay title="lorem ipsum" imgPath="hackers_group.jpg" name="test"/>
        <a href='/news/{path}'>Veure més...</a>
    </div>
  )
}

export default NewsVerticalDisplay
