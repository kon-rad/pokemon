import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { fetchPokemon, fetchRandom } from '../actions';

const DEFAULT_POKEMON = [
  7,
  4,
  1,
];


class CardList extends Component {
  componentDidMount() {
    DEFAULT_POKEMON.map(n => this.props.fetchPokemon(n));
  }

  renderList = () => {
    return this.props.pokemon.map(pokemon => {
      return (
        <Card key={pokemon.id} pokemon={pokemon} />
      )
    })
  };

  getRandom = () => {
    this.props.fetchRandom();
  };

  render() {
    return (
      <div className="cards_list">
        <div className="cards_container">
          {this.renderList()}
        </div>
        <div className="cards_get_random">
          <a onClick={this.getRandom} className="waves-effect waves-light btn">Get Random Pokemon</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: Object.values(state.pokemon),
  };
};

export default connect(mapStateToProps, { fetchPokemon, fetchRandom })(CardList);
