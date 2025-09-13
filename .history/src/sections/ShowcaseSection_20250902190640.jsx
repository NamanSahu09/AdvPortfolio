import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { }

  }, []);

  return (
    <section id="work"
    ref = {sectionRef} 
    className="app-showcase">
      <div className="w-full">
        <div className='showcaselayout'>
            {/* Left Side */}
            <div className="first-project-wrapper" ref={project1Ref}>
             <div className='image-wrapper'>
              <img src="/images/project1.png" alt="KingHills"/>
             </div>

             <div className="text-content">
              <h2>On-Demand Rides Made Simple at LPU, User-Friendly App called KingHills.</h2>
              <p className="text-white-50 md:text-xl">An app built with Java,XML a fast user-friendly experience.</p>

             </div>



            </div>





            {/* Right Side */}
            <div className ="project-list-wrapper overflow-hidden">
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-[#ffefdb">
                  <img src="/images/project2.png" alt="Mentor Connect System"/>
                </div>
                <h2>MentorConnect</h2>

              </div>
              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-[#ffe7eb">
                  <img src="/images/project3.png" alt="EDTech Website"/>
                </div>
                <h2>Vidyapeeth - A Startup Showcase App </h2>

              </div>
            </div>

        </div>

      </div>
      
      </div>
  )
}

export default ShowcaseSection