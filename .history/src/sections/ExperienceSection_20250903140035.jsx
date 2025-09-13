import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../data/expCards' // <-- agar tu alag file se import kar raha hai

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Work Experience" sub="My Career Overview" />
        
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{card.date}</p>

                {/* Review */}
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                  "{card.review}"
                </p>

                {/* Responsibilities */}
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  {card.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
