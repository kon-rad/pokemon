import React, { Component } from 'react';

export default (props) => {
  return (
    <div className="card card_poke" key={props.pokemon.id}>
      <div className="card-content">
        <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
        <span className="card-title activator grey-text text-darken-4">{props.pokemon.name}</span>
        <p>
          {/* the weight is in hectograms ( * 0.220462 to get lbs)*/}
          Weight: {props.pokemon.weight}
        </p>
        <p>
          {/*the height is in decimeters*/}
          Height: {props.pokemon.height}
        </p>
        <p>
          Weight: {props.pokemon.weight}
        </p>
        <p>
          Base Experience: {props.pokemon.base_experience}
        </p>
      </div>
    </div>
  );
}
