import React from 'react'
import Grups from "./Grups"

const MetaTest = ({ functionsList}) => {
  return (
    <div>
      {functionsList.map((data,i) => (
          <Grups key={i} data={data} />
        ))}
    </div>
  )
}

export default MetaTest