import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { fetchPokemon, fetchRandom } from '../actions';

const DEFAULT_POKEMON = [7, 4, 1];

class CardList extends Component {
  componentDidMount() {
    const { fetchPokemon: fetchPokemonAction } = this.props;
    DEFAULT_POKEMON.map(n => fetchPokemonAction(n));
  }

  renderList = () => {
    const { pokemon } = this.props;
    return pokemon.map(poke => <Card key={poke.id} pokemon={poke} />);
  };

  getRandom = () => {
    const { fetchRandom: fetchRandomAction } = this.props;
    fetchRandomAction();
  };

  render() {
    return (
      <div className="cards_list">
        <div className="cards_container">
          {this.renderList()}
        </div>
        <div className="cards_get_random">
          <button type="button" onClick={this.getRandom} className="waves-effect waves-light btn">Get Random Pokemon</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: Object.values(state.pokemon),
});
export default connect(mapStateToProps, { fetchPokemon, fetchRandom })(CardList);
