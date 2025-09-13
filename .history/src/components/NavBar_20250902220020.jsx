import React from 'react'

const NavBar = () => {
  return (
   <header className="navbar">
    <div className="inner">
      <a className='logo' href="#hero">
        Naman Swastik Sahu | Charlie
      </a>
      <nav className="desktop">
        <ul>
          {navLinks.map(({link, name) => (}
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