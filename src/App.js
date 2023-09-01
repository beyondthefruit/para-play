import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import { GiCannedFish, GiWool, GiMilkCarton, GiLungs } from 'react-icons/gi';
import { PawPrint } from './imgs/pawprint_1076928.png';
import catCrew from './data.js';
import Crew from './Components/crew';
import Mission from './Components/mission';

function App() {
  const alignCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const [flip, setFlip] = useState(false);
  const [dataCrew] = useState(catCrew);
  // console.log(dataCrew);
  // console.log(catCrew);
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
              Welcome aboard tuna lovers
            </h1>
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
                ></img>
                <div className='text'>
                  <p>
                    A pioneering team of feline astronauts embarks on an
                    extraordinary journey to explore the enigmatic beauty of
                    Saturn. The "Purrfect Saturn Expedition" is a collaborative
                    effort between feline research specialists and space
                    agencies dedicated to pushing the boundaries of space
                    exploration.
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
                <img src={require('./imgs/9398462_347251.png')}></img>
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
                {/* One small pawprint for a cat <PawPrint /> */}
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
//<a href="https://www.freepik.com/free-photo/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustration_21988050.htm#query=spacecraft%20store%20room&position=16&from_view=search&track=ais#position=16&query=spacecraft%20store%20room">Image by user6702303</a> on Freepik
// <a href="https://www.freepik.com/free-photo/moon-surface-big-planet-background_29302738.htm#&position=0&from_view=collections">Image by wirestock</a> on Freepik
// <a href="https://www.freepik.com/free-ai-image/one-person-piloting-futuristic-spaceship-outdoors-generated-by-ai_42309548.htm#&position=0&from_view=collections">Image By vecstock</a>
{
  /* <a href='https://www.freepik.com/free-ai-image/rocket-flying-through-space_41745942.htm#&position=1&from_view=collections'>
  Image By freepik
</a>; */
}
{
  /* <a href='https://www.freepik.com/search?format=search&last_filter=type&last_value=icon&query=cat%20paw&selection=1&type=icon'>
  Icon by Freepik
</a>; */
}
//<a href="https://www.freepik.com/free-vector/abstract-future-interface-composition_9398462.htm#query=spacecraft%20objectif&position=17&from_view=search&track=ais">Image by macrovector</a> on Freepik
// <a href="https://www.freepik.com/search?format=search&last_filter=type&last_value=icon&query=cat%20world&selection=1&type=icon">Icon by Freepik</a>

// <a href="https://www.freepik.com/free-photo/space-planet-science-night-generated-by-ai_41219020.htm#&position=4&from_view=collections">Image by vecstock</a> on Freepik
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
export default App;
