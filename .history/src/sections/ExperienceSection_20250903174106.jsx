import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Work Experience" sub="My Career Overview"/>

        <div className="mt-20 relative">
          <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {expCards.map((card) => (
              <GlowCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
