import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import catCrew from './data.js';
import Crew from './Components/crew';

function App() {
  const alignCenter = {
    display: 'flex',
    alignItems: 'center',
  };
  const [flip, setFlip] = useState(false);
  const [dataCrew] = useState(catCrew);
  console.log(dataCrew);
  console.log(catCrew);
  return (
    <>
      <div className='background'>
        <Parallax pages={5}>
          <ParallaxLayer
            offset={0}
            speed={0.8}
            style={{
              alignCenter,
              justifyContent: 'center',
            }}
          >
            <img
              src={require('./imgs/rocket-flying-through-space.jpg')}
              style={{ display: 'block', width: '100%', height: '200%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              alignCenter,
              justifyContent: 'center',
            }}
          >
            <img
              src={require('./imgs/moon-surface-big-planet-background.jpg')}
              style={{ display: 'block', width: '100%', height: '100%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.4}
            speed={-0.2}
            style={{
              alignCenter,
              justifyContent: 'center',
            }}
          >
            <h1 style={{ width: '100%', height: '20%', color: 'white' }}>
              Welcome aboard tuna lover!
            </h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={-0.2}
            style={{
              ...alignCenter,
              justifyContent: 'center',
            }}
          >
            <Crew dataCrew={dataCrew}></Crew>
          </ParallaxLayer>
          {/* <ParallaxLayer
            sticky={{ start: 1, end: 2.5 }}
            style={{ alignCenter, justifyContent: 'center' }}
          >
            <div
              className='cards-sticky'
              style={{
                background: 'yellow',
              }}
            >
              <h1>Mini moy</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 1.5, end: 2.5 }}
            style={{ ...alignCenter, justifyContent: 'center', top: '10px' }}
          >
            <div
              className='cards-sticky'
              style={{
                background: 'red',
                top: '10px',
              }}
            >
              <h1>Mini moy</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 2, end: 2.5 }}
            style={{ ...alignCenter, justifyContent: 'center', top: '20px' }}
          >
            <div
              className='cards-sticky'
              style={{
                background: 'brown',
                top: '20px',
              }}
            >
              <h1>Mini moy</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={1}
            style={{
              ...alignCenter,
              justifyContent: 'flex-start',
            }}
          >
            <div
              className='cards'
              style={{
                background: 'orange',
              }}
            >
              <h1>Bernard</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={10}
            style={{
              ...alignCenter,
              justifyContent: 'flex-end',
            }}
          >
            <div
              className='cards'
              style={{
                background: 'aqua',
              }}
            >
              <h1>Michel</h1>
            </div>
          </ParallaxLayer> */}
        </Parallax>
      </div>
    </>
  );
}
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
