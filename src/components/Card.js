import React from 'react';

export default (props) => {
  // the weight is in hectograms; convert to lbs
  const weight = (props.pokemon.weight * 0.220462).toFixed(2) + ' lbs';
  // the height is in decimeters; convert to ft, in
  const heightIn = Math.floor((props.pokemon.height * 3.93701) % 12 );
  const heightFt = Math.floor((props.pokemon.height * 3.93701) / 12);
  const height = heightFt + ' ft ' + heightIn + ' in';
  return (
    <div className="card card_poke" key={props.pokemon.id}>
      <div className="card-content">
        <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
        <span className="card-title activator grey-text text-darken-4">
          {props.pokemon.name} <i className="material-icons right">more_vert</i>
        </span>
        <p>
          Weight: {weight}
        </p>
        <p>
          Height: {height}
        </p>
        <p>
          Base Experience: {props.pokemon.base_experience}
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.pokemon.name}
          <i className="material-icons right">close</i>
        </span>
        <img src={props.pokemon.sprites.front_shiny} alt={props.pokemon.name}/>
        <p>Abilities:</p>
        <ul>
          {props.pokemon.abilities.map(a => (<li key={a.ability.name}>{a.ability.name}</li>))}
        </ul>
      </div>
    </div>
  );
}
