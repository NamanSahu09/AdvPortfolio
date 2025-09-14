import React from 'react';
import TitleHeader from '../components/TitleHeader';

const Contact = () => {
  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title='Get in Touch'
          sub="📞 Contact Information!"
        />
        {/* Additional contact form or information can be added here */}

        <div className='mt-16'></div>


      </div>
    </section>
  );
}

export default Contact;