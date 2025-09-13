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
          <div className="relative z-50 xl:space-y-32 space-y-16">
            
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper grid xl:grid-cols-2 gap-10 items-center">
                
                {/* Left Side - Testimonial */}
                <div className="w-full">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>

                {/* Right Side - Role/Experience */}
                <div className="w-full">
                  <div
