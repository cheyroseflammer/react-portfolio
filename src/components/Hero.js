import Typed from 'react-typed';
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero-content'>
        <p className='text-1'>Hello, my name is</p>
        <p className='text-2'>Chey</p>
        <p className='text-3'>
          And I am a{' '}
          <Typed
            strings={['web developer.', 'software engineer.', 'web designer.']}
            typeSpeed={40}
            backSpeed={50}
            loop
            className='typing'
          ></Typed>
        </p>
      </div>
    </section>
  );
};

export default Hero;
