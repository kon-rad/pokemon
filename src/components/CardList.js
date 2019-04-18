import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import fetchPokemon from '../../actions';

class CardList extends Component {
  componentDidMount() {
    console.log(this.props, 'props');
    this.props.fetchPokemon(this.props.match.params.id);
  }

  renderList = () => {
    return this.props.pokemon.map(pokemon => {
      return (
        <div className="card">
          <p>{pokemon.name}</p>
        </div>
      )
    })
  };

  render() {
    return (
      <div className="cards_container">
        <h1>Pokemon</h1>
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
