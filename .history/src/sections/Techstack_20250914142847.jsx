import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
const Techstack = () => {
  return (
    <div id="skills" className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
        title="My Preferred Tech Stack"
        sub="🤝 The skills I Bring to the Table"
        />
        <div className="tech-grid">
           { techStackIcons.map((icon) => (
             <div key={icon.name} className='card-border tech-card overflow-hidden group:xl rounded-full rounded-lg '>
                <div className='tec-card-animated'/>
                </div>
            ))}
       </div>

        
        </div>  
    </div>
  )
}

export default Techstack