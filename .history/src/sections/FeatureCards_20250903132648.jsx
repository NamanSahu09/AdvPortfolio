import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
  return (
    <div className="w-full padding-g-lg">
      <div className="mx-auto grid-3-col">
        {abilities.map(({ imgPath, title, desc}) => (
          <div key={title} className="card-border rounder-xl p-8 flex flex-col gap-4">
            <div className="size-14 flex items-center justify-center rounded-full"> 
              <img src={imgPath} alt={title}/>
            </div>
            <h3 className="text-white text-2xl font-semibold">{title}</h3>
            <div />
          </div>
        ))}

      </div>


    </div>
  )
}

export default FeatureCards