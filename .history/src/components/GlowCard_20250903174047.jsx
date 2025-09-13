import React, { useRef } from 'react'

const GlowCard = ({ card }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
    angle = (angle + 360) % 360

    card.style.setProperty('--start', angle + 60)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-2xl p-8 relative overflow-hidden bg-[#111] shadow-lg"
    >
      {/* Glow effect */}
      <div className="glow absolute inset-0 pointer-events-none" />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="w-5 h-5" />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-300 text-base leading-relaxed mb-6">
        {card.review}
      </p>

      {/* Logo */}
      <div className="flex justify-center mb-5">
        <img
          src={card.imgPath}
          alt={card.title}
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Title + Date */}
      <h3 className="text-lg font-bold text-white text-center">
        {card.title}
      </h3>
      <p className="text-gray-400 text-sm text-center mb-4">{card.date}</p>

      {/* Responsibilities */}
      <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
        {card.responsibilities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default GlowCard
