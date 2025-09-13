import React from 'react'

const GlowCard = ({ card, children}) => {
  return (
    <div className="card card-border timeline-card rounded-xl p-10">
      <div className="glow"/>

      <div>
        {Array.from({length:5}, (_,i) =>
        <img src="/images/star.png"
        )}
      </div>
      
    </div>
  )
}

export default GlowCard