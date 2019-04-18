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
  // the weight is in hectograms; convert to lbs
  const displayWeight = `${(weight * 0.220462).toFixed(2)} lbs`;
  // the height is in decimeters; convert to ft, in
  const heightIn = Math.floor((height * 3.93701) % 12);
  const heightFt = Math.floor((height * 3.93701) / 12);
  const displayHeight = `${heightFt} ft ${heightIn} in`;
  return (
    <div className="card card_poke" key={id}>
      <div className="card-content">
        <img src={sprites.front_default} alt={name} />
        <span className="card-title activator grey-text text-darken-4">
          {name}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          Weight:
          {displayWeight}
        </p>
        <p>
          Height:
          {displayHeight}
        </p>
        <p>
          Base Experience:
          {baseExperience}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {name}
          <i className="material-icons right">close</i>
        </span>
        <img src={sprites.front_shiny} alt={name} />
        <p>Abilities:</p>
        <ul>
          {abilities.map(a => (<li key={a.ability.name}>{a.ability.name}</li>))}
        </ul>
      </div>
    </div>
  );
};
