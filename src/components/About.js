import React from 'react';
import '../styles/About.css';
import { desertMe } from '../assets';
import Typed from 'react-typed';

const About = () => {
  return (
    <section className='about' id='about'>
      <h2 className='title'>About Me</h2>
      <div className='about-content'>
        <div className='colum left'>
          <img src={desertMe} alt='me' />
        </div>
        <div className='column right'>
          <p className='text'>
            I am{' '}
            <Typed
              strings={['passionate.', 'hard working.', 'driven.']}
              typeSpeed={40}
              backSpeed={50}
              loop
              className='typing'
            ></Typed>
          </p>
          <p>
            I’m a creative digital product designer based in Juniper Hills, CA. Passionate about
            everything and anything visual. Focusing on creating comfortable and efficient user
            experinces. Equipt with problem-solving skills and a hard-working nature I can create
            meaningful products bringing people together
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
