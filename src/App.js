import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import { GiCannedFish, GiWool, GiMilkCarton, GiLungs } from 'react-icons/gi';

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
  console.log(dataCrew);
  console.log(catCrew);
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
            <img
              className='spacecraft'
              src={require('./imgs/rocket-flying-through-space.jpg')}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.4}
            speed={-0.2}
            style={{
              alignCenter,
            }}
          >
            <h1 style={{ width: '100%', height: '20%', color: 'white' }}>
              Welcome aboard tuna lover!
            </h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={window.innerWidth < 768 ? 1.5 : 1.9}
            speed={-0.2}
          >
            <Crew dataCrew={dataCrew}></Crew>
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
                ></img>

                <p>
                  A pioneering team of feline astronauts embarks on an
                  extraordinary journey to explore the enigmatic beauty of
                  Saturn. The "Purrfect Saturn Expedition" is a collaborative
                  effort between feline research specialists and space agencies
                  dedicated to pushing the boundaries of space exploration.
                </p>
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
                  src={require('./imgs/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustration.jpg')}
                ></img>

                <p>
                  It involves a journey of months, during which they will
                  conduct experiments, gather data, and document the majestic
                  beauty of Saturn's rings and moons. The crew's agility,
                  adaptability, and sharp senses is essential in maneuvering the
                  spacecraft through the cosmic challenges of the solar system
                </p>
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
                ></img>
                <div className='loot'>
                  <p>
                    <GiCannedFish />
                  </p>
                  <p>
                    <GiWool />
                  </p>
                  <p>
                    <GiMilkCarton />
                  </p>
                  <p>
                    <GiLungs />
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
              <h1>One small pawprint for a cat</h1>
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
              <h1>One giant leap for catkind!</h1>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
//<a href="https://www.freepik.com/free-photo/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustration_21988050.htm#query=spacecraft%20store%20room&position=16&from_view=search&track=ais#position=16&query=spacecraft%20store%20room">Image by user6702303</a> on Freepik
// <a href="https://www.freepik.com/free-photo/moon-surface-big-planet-background_29302738.htm#&position=0&from_view=collections">Image by wirestock</a> on Freepik
// <a href="https://www.freepik.com/free-ai-image/one-person-piloting-futuristic-spaceship-outdoors-generated-by-ai_42309548.htm#&position=0&from_view=collections">Image By vecstock</a>
{
  /* <a href='https://www.freepik.com/free-ai-image/rocket-flying-through-space_41745942.htm#&position=1&from_view=collections'>
  Image By freepik
</a>; */
}
// <a href="https://www.freepik.com/free-photo/space-planet-science-night-generated-by-ai_41219020.htm#&position=4&from_view=collections">Image by vecstock</a> on Freepik
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
export default App;
