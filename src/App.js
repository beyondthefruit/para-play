import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import { GiCannedFish, GiWool, GiMilkCarton, GiLungs } from 'react-icons/gi';
// import { PawPrint } from './imgs/pawprint_1076928.svg';
import catCrew from './data.js';
import Crew from './Components/crew';

function App() {
  const alignCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const [flip, setFlip] = useState(false);
  const [dataCrew] = useState(catCrew);

  return (
    <>
      <div className='background'>
        <Parallax pages={6}>
          <ParallaxLayer
            offset={0}
            speed={0.8}
            style={{
              alignCenter,
            }}
          >
            <picture>
              <source type='image/webp'></source>
              <source
                media='(min-width: 769px)'
                srcset={require('./imgs/rocket-flying-through-space.webp')}
              />
              <source
                media='(max-width: 768px)'
                srcset={require('./imgs/medium-rocket-flying-through-space.webp')}
              />
              <source
                media='(max-width: 450px)'
                srcset={require('./imgs/small-rocket-flying-through-space.webp')}
              />

              <source type='image/jpeg'></source>
              <source
                media='(min-width: 769px)'
                srcset={require('./imgs/rocket-flying-through-space.jpg')}
              />
              <source
                media='(max-width: 768px)'
                srcset={require('./imgs/medium-rocket-flying-through-space.jpg')}
              />
              <source
                media='(max-width: 450px)'
                srcset={require('./imgs/small-rocket-flying-through-space.jpg')}
              />
              <img
                src={require('./imgs/rocket-flying-through-space.jpg')}
                className='spacecraft'
                alt='rocket flying'
              ></img>
            </picture>
            {/* <img
              className='spacecraft'
              src={require('./imgs/rocket-flying-through-space.jpg')}
              srcset={`${require('./imgs/small-rocket-flying-through-space.jpg')} 450w, ${require('./imgs/medium-rocket-flying-through-space.jpg')} 768w, ${require('./imgs/rocket-flying-through-space.jpg')} 1280w`}
              sizes='(max-width: 450px) 450px,(max-width: 768px) 768px, 1280px'
              alt='rocket flying'
              rel='preload'
            /> */}
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.4}
            speed={-0.2}
            style={{
              alignCenter,
            }}
          >
            <h1 className='main-title'>Welcome aboard tuna lovers</h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={window.innerWidth < 768 ? 1.3 : 1.9}
            speed={-0.2}
          >
            <Crew dataCrew={dataCrew} flip={flip} setFlip={setFlip}></Crew>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 3, end: 4.5 }}
            style={{ ...alignCenter }}
          >
            <div className='cards-sticky'>
              <h2>Our objective SATURN</h2>
              <div className='stick'>
                <img
                  src={require('./imgs/moon-surface-big-planet-background.jpg')}
                  alt='mission target'
                ></img>
                <div className='text'>
                  <p>
                    A pioneering team of feline astronauts embarks on an
                    extraordinary journey to explore the enigmatic beauty of
                    Saturn. The "Purrfect Saturn Expedition" is a collaborative
                    effort between feline research specialists and space
                    agencies dedicated to pushing the boundaries of space
                    exploration
                  </p>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 3.5, end: 4.5 }}
            style={{ ...alignCenter, top: '10px' }}
          >
            <div className='cards-sticky'>
              <h2>Our Mission</h2>
              <div className='stick'>
                <img
                  src={require('./imgs/9398462_347251.png')}
                  alt='mission description'
                ></img>
                <div className='text'>
                  <p>
                    It involves a journey of months, during which they will
                    conduct experiments, gather data, and document the majestic
                    beauty of Saturn's rings and moons. The crew's agility,
                    adaptability, and sharp senses is essential in maneuvering
                    the spacecraft through the cosmic challenges of the solar
                    system
                  </p>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 4, end: 4.5 }}
            style={{ ...alignCenter, top: '20px' }}
          >
            <div className='cards-sticky'>
              <h2>Supply</h2>
              <div className='stick'>
                <img
                  src={require('./imgs/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustration.jpg')}
                  alt='storeroom'
                ></img>
                <div className='loot'>
                  <p>
                    <GiCannedFish className='icon' />
                    Our crew need food for a year
                  </p>
                  <p>
                    <GiWool className='icon' />
                    Our crew have to relax during the long journey entertainment
                    is essential to their mental health
                  </p>
                  <p>
                    <GiMilkCarton className='icon' />
                    Who doesn't like a glass of milk
                  </p>
                  <p>
                    <GiLungs className='icon' />
                    Air is provided from reserve and the greenhouse inside the
                    spacecraft
                  </p>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={1}
            style={{
              ...alignCenter,
              justifyContent: 'flex-start',
            }}
          >
            <div className='cards'>
              <h1>
                One small pawprint for a cat
                {/* <PawPrint className='icon2' /> */}
              </h1>
              {/* <img src={require('./imgs/pawprint_1076928.png')} alt='' /> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            speed={10}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
            }}
          >
            <div className='cards'>
              <h1 id='catkind'>One giant leap for catkind!</h1>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
