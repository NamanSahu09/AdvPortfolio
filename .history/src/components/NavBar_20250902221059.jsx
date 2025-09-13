import React from 'react'
import { navLinks } from '../constants';

const NavBar = () => {

  const [scrolled,setScrolled] = useState(false);
  

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