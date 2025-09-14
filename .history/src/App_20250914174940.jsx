import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Techstack from './sections/Techstack.jsx'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonial from './sections/Testimonial.jsx'
import Contact from './sections/Contact.jsx'
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <Techstack/>
      <Testimonial/>
      <Contact/>
    </>
  )
}

export default App
