import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Work Experience" sub="My Career Overview"/>
        
        <div className="mt-32 relative">
          {/* GRID for cards */}
          <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <GlowCard card={card}>
                  <div className="flex flex-col items-center">
                    <img 
                      src={card.imgPath} 
                      alt={card.title} 
                      className="w-20 h-20 object-contain mb-5"
                    />
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{card.date}</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {card.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
