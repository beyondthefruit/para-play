import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function App() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'black' }}>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ width: '100%', height: '40%', background: 'pink' }}>
            Hello World
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1} style={{}}>
          <h1 style={{ width: '100%', height: '40%', background: 'grey' }}>
            Mini moy
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              margin: '0 5%',
              width: '40%',
              height: '60%',
              background: 'orange',
            }}
          >
            <h1>Bernard</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={20}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              margin: '0 5%',
              width: '40%',
              height: '60%',
              background: 'aqua',
            }}
          >
            <h1>Michel</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
