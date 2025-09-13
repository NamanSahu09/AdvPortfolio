import React from 'react'
import { navLinks } from '../constants';
import { useState } from 'react';
import { useEffect } from 'react';
const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled); // ✅ ab true/false dono handle hoga
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
   <header className="navbar">
    <div className="inner">
      <a className='logo' href="#hero"> 
        Naman Swastik Sahu | Charlie
      </a>
      <nav className="desktop">
  <ul>
    {navLinks.map(({ link, name }) => (
      <li key={name} className="group">
        <a href={link}>
          <span>{name}</span>
          <span className="underline"/>
        </a>
      </li>
    ))}
  </ul>
</nav>

      <a href="#contact" className ="contact-btn group">
        <div className="inner">
          <span>Contact me</span>

        </div>
      </a>

    </div>
    </header>
  )
}

export default NavBar