import React from 'react'
import { socialImgs } from '../constants' 

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        
        {/* Blog Link */}
        <div className='flex flex-col justify-center md:items-start items-center'>
          <a href='/'>
            Visit my blog.
          </a>
        </div>

        {/* Social Icons */}
        <div className='socials'>
          {socialImgs.map((img) => (
            <a className='icon' target="_blank" href={img.url} key={img.url} rel="noopener noreferrer">
              <img src={img.imgPath} alt={img.name || "social-icon"} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center"> 
          <p className='text-center md:text-end'> 
            © {new Date().getFullYear()} Naman | All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
