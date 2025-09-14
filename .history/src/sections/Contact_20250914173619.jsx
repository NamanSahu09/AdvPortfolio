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

        <div className='mt-16'>
          <p className='text-center'>
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>
          <p
        </div>


      </div>
    </section>
  );
}

export default Contact;