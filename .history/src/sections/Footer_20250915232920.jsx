import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container '>
        <div className='flex flex-col  justify-center'>
        <a href='/'>
        Visit my blog.
        </a>
        </div>
        <div className='socials'>
           {socialImgs.map((img)=> 
            <a>
              <img src={img.imgPath}>
              </img>

            </a>
          )}
        </div>
      </div>


    </footer>>
  )
}

export default Footer