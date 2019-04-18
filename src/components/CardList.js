import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import fetchPokemon from '../actions';

const DEFAULT_POKEMON = [
  7,
  4,
  1,
];

class CardList extends Component {
  componentDidMount() {
    console.log(this.props, 'props');
    DEFAULT_POKEMON.map(n => this.props.fetchPokemon(n));
  }

  renderList = () => {
    return this.props.pokemon.map(pokemon => {
      return (
        <div className="card card_poke" key={pokemon.id}>
          <div className="card-content">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span class="card-title activator grey-text text-darken-4">{pokemon.name}</span>
            <p>
              Weight: {pokemon.weight}
            </p>
            <p>
              Height: {pokemon.height}
            </p>
            <p>
              Weight: {pokemon.weight}
            </p>
            <p>
              Base Experience: {pokemon.base_experience}
            </p>
          </div>
        </div>
      )
    })
  };

  render() {
    return (
      <div className="cards_container">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: Object.values(state.pokemon),
  };
};

export default connect(mapStateToProps, { fetchPokemon })(CardList);
