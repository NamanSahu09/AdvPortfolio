import React, { useRef } from 'react'

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    // get mouse position relative to card
    const rect = card.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    // calc angle
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
    angle = (angle + 360) % 360

    card.style.setProperty('--start', angle + 60)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside relative overflow-hidden"
    >
      {/* Glow effect div */}
      <div className="glow absolute inset-0 pointer-events-none" />

      {/* Rating stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>

      {/* Review text */}
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {/* Extra children (like title, date, responsibilities, etc.) */}
      {children}
    </div>
  )
}

export default GlowCard
