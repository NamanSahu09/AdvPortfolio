import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
  return (
    <div className="w-full padding-g-lg">
      <div className="mx-auto grid-3-col">
        {abilities.map(({ imgPath,title,desc} ))}

      </div>


    </div>
  )
}

export default FeatureCards