const Crew = ({ dataCrew }) => {
  return (
    <div className='crew'>
      {dataCrew.map((cat) => {
        console.log(cat);
        const { id, img, name, role, desc, funFact, like } = cat;
        return (
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
        );
      })}
    </div>
  );
};
export default Crew;
