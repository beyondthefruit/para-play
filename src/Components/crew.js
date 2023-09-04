import { useState } from 'react';
import Cat from './cat';
const Crew = ({ dataCrew, flip, setFlip }) => {
  const [save, setSave] = useState(null);
  const handleCLick = (id) => {
    setFlip(!flip);
    const updatedid = id;
    setSave(updatedid);
  };

  return (
    <>
      <div className='crew-part'>
        <h1>Our Catstronaut crew</h1>
      </div>
      <div className='crew'>
        {dataCrew.map((cat) => {
          // console.log(cat);
          const { id, img, name, role, desc, funFact, like } = cat;
          return (
            <div key={id} className='flip-card' onClick={() => handleCLick(id)}>
              {window.innerWidth > 768 ? (
                <>
                  <div key={id} className='flip-card'>
                    <div className='flip-card-inner'>
                      <div className='flip-card-front'>
                        <img src={img} alt={name}></img>
                      </div>
                      <div className='flip-card-back'>
                        <h2>{name}</h2>
                        <p>{role}</p>
                        <p>{desc}</p>
                        <p>{funFact}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Cat
                  key={id}
                  {...cat}
                  flip={flip}
                  setFlip={setFlip}
                  save={save}
                />
              )}
              ;
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Crew;
