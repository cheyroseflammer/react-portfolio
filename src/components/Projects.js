import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='title'>Projects</h2>
      <div className='carousel'>
        <OwlCarousel className='owl-theme' loop margin={10} nav>
          <div className='card'>
            <div className='box'>
              <img src='#' alt='fire tracker landing' />
              <div className='text'>Wildfire Tracker</div>
              <p>
                This project is a React based application fetching data from the events object API
                endpoint from NASA's open EONET API.
              </p>
              <div className='text-2'>Tech Used:</div>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <div className='text-3'>Links</div>
              <ul>
                <li>
                  <a
                    className='github'
                    target='_blank'
                    href='https://github.com/cheyroseflammer/wildfire-tracker'
                  >
                    GitHub Repo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* PROJECT 2 */}
          <div className='card'>
            <div className='box'>
              <img src='#' alt='crypto app' />
              <div className='text'>Crypto App</div>
              <p>
                Cryptocurrency finance price tracker app using React Hooks and Axios to pull data
                from the public API CoinGecko.
              </p>
              <div className='text-2'>Tech Used:</div>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript & React</li>
                <li>Axios</li>
              </ul>
              <div className='text-3'>Links</div>
              <ul>
                <li>
                  <a
                    className='github'
                    target='_blank'
                    href='https://github.com/cheyroseflammer/wildfire-tracker'
                  >
                    GitHub Repo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* PROJECT 3 */}
          <div className='card'>
            <div className='box'>
              <img src='#' alt='palms and paws' />
              <div className='text'>Palms and Paws</div>
              <p>
                Mock React based client wesbite to showcase developed design skills. Designed and
                prototpyed using Adobe XD.
              </p>
              <div className='text-2'>Tech Used:</div>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript & React</li>
                <li>Adobe XD</li>
              </ul>
              <div className='text-3'>Links</div>
              <ul>
                <li>
                  <a
                    className='github'
                    target='_blank'
                    href='https://github.com/cheyroseflammer/wildfire-tracker'
                  >
                    GitHub Repo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* PROJECT 4 */}
          <div className='card'>
            <div className='box'>
              <img src='#' alt='palms and paws' />
              <div className='text'>Project 4</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod officia
                saepe illo explicabo corporis ab.
              </p>
              <div className='text-2'>Tech Used:</div>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript & React</li>
                <li>Adobe XD</li>
              </ul>
              <div className='text-3'>Links</div>
              <ul>
                <li>
                  <a
                    className='github'
                    target='_blank'
                    href='https://github.com/cheyroseflammer/wildfire-tracker'
                  >
                    GitHub Repo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </OwlCarousel>
        ;
      </div>
    </section>
  );
};

export default Projects;
