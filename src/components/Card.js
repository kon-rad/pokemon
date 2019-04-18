import React from 'react';

export default ({ pokemon }) => {
  const {
    name,
    height,
    weight,
    base_experience: baseExperience,
    abilities,
    sprites,
    id,
  } = pokemon;
  // the default weight is in hectograms; convert to lbs
  const displayWeight = `${(weight * 0.220462).toFixed(2)} lbs`;
  // the default height is in decimeters; convert to ft, in
  const heightIn = Math.floor((height * 3.93701) % 12);
  const heightFt = Math.floor((height * 3.93701) / 12);
  const displayHeight = `${heightFt} ft ${heightIn} in`;
  const mainImage = sprites.front_default || '../images/pokemon.jpg';
  const secondImage = sprites.front_shiny || '../images/pokemon.jpg';

  return (
    <div className="card card_poke" key={id}>
      <div className="card-content">
        <img className="card_image" src={mainImage} alt={name} />
        <span className="card-title activator grey-text text-darken-4">
          {name}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          Weight:&nbsp;
          {displayWeight}
        </p>
        <p>
          Height:&nbsp;
          {displayHeight}
        </p>
        <p>
          Base Experience:&nbsp;
          {baseExperience}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {name}
          <i className="material-icons right">close</i>
        </span>
        <img src={secondImage} alt={name} />
        <p>Abilities:</p>
        <ul>
          {abilities.map(a => (<li key={a.ability.name}>{a.ability.name}</li>))}
        </ul>
      </div>
    </div>
  );
};
