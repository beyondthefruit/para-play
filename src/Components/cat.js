const Cat = ({ id, img, name, role, desc, funFact, like, flip, save }) => {
  return (
    <>
      <div key={id} className='flip-card'>
        <div className='flip-card-inner'>
          <>
            <div
              className={`flip-card-front ${
                flip && save == id ? 'hidden' : ''
              }`}
            >
              <img src={img} alt={name}></img>
            </div>

            <div
              className={`flip-card-back ${
                flip && save === id ? '' : 'hidden'
              }`}
            >
              <h2>{name}</h2>
              <p>{role}</p>
              <p>{desc}</p>
              <p>{funFact}</p>
            </div>
          </>
        </div>
      </div>
    </>
  );
};
export default Cat;
