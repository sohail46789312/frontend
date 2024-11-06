import React from 'react';
import logo from './public/images/logo.png';

const Hero = () => {
  return (
    <header className='header'>
       <nav className="className">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
       </nav>
    </header>
  )
}

export default Hero;