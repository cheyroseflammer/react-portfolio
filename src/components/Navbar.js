import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useRef } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive__nav');
  };

  return (
    <header>
      <h3>
        <a href='/#'>
          Portfo<span>lio</span>
        </a>
      </h3>
      <nav ref={navRef}>
        <a href='/#'>Home</a>
        <a href='/#'>About</a>
        <a href='/#'>Projects</a>
        <a href='/#'>Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
