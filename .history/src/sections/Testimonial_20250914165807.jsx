import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>

    <div className='w-full h-full md:px-10 px-5'>
      <TitleHeader title='What People Say About Me?'
        sub="⭐️ Client Feedback Highlights"
      />
      <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
        {testimonials.map((testimonial) => (
          
        )}
      </div>

    </div>

    </section>
  )
}

export default Testimonial