const Cat = ({ id, img, name, role, desc, funFact, like, flip }) => {
  return (
    <>
      <div key={id} className='flip-card'>
        <div className='flip-card-inner'>
          {/* {window.innerWidth < 768 ? (
            <>
              <div className={`flip-card-front ${flip ? 'hidden' : ''}`}>
                <img src={img} alt={name}></img>
              </div>

              <div className={`flip-card-back ${!flip ? 'hidden' : ''}`}>
                <h2>{name}</h2>
                <p>{role}</p>
                <p>{desc}</p>
                <p>{funFact}</p>
              </div>
            </>
          ) : ( */}
          {!flip ? (
            <div className='flip-card-front'>
              <img src={img} alt={name}></img>
            </div>
          ) : (
            <div className='flip-card-back'>
              <h2>{name}</h2>
              <p>{role}</p>
              <p>{desc}</p>
              <p>{funFact}</p>
            </div>
          )}
          {/* <>
              <div className='flip-card-front'>
                <img src={img} alt={name}></img>
              </div>
              <div className='flip-card-back'>
                <h2>{name}</h2>
                <p>{role}</p>
                <p>{desc}</p>
                <p>{funFact}</p>
              </div>
            </> */}
          )}
        </div>
      </div>
    </>
  );
};
export default Cat;
