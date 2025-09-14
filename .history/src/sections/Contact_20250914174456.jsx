import React from 'react';
import TitleHeader from '../components/TitleHeader';
import ContactExperience from '../components/ContactExperience';

const Contact = () => {
  return (
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
          title='Get in Touch'
          sub="📞 Contact Information!"
        />

        {/* Grid Layout: Form (left) | ContactExperience (right) */}
        <div className='grid grid-cols-12 gap-10 mt-10'>
          
          {/* Left: Contact Form */}
          <div className='col-span-12 md:col-span-6'>
            <form className='flex flex-col gap-5'>
              <div className='flex flex-col'>
                <label htmlFor='name' className='text-sm font-semibold'>Name</label>
                <input 
                  type='text' 
                  id='name' 
                  name='name' 
                  placeholder='Your Name' 
                  className='input-class' 
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='email' className='text-sm font-semibold'>Email</label>
                <input 
                  type='email' 
                  id='email' 
                  name='email' 
                  placeholder='Your Email' 
                  className='input-class' 
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='message' className='text-sm font-semibold'>Message</label>
                <textarea 
                  id='message' 
                  name='message' 
                  placeholder='Your Message' 
                  className='textarea-class' 
                  rows='5'
                />
              </div>

              <button type='submit' className='btn-class mt-2'>
                Send Message
              </button>
            </form>
          </div>

          {/* Right: 3D Experience */}
          <div className='col-span-12 md:col-span-6 h-96 md:h-full'>
            <ContactExperience />
          </div>

        </div>

        {/* Optional: Contact info at bottom */}
        <div className='mt-16 text-center'>
          <p>Feel free to reach out for collaborations, questions, or just to say hello!</p>
          <p className='mt-4'>Email: namanswastik11@gmail.com</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
