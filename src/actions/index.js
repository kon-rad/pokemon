import { FETCH_POKEMON, FETCH_RANDOM } from './types';
import pokemon from '../apis/pokemon';

const NUMBER_OF_POKEMON = 807;

export const fetchPokemon = num => async (dispatch) => {
  const response = await pokemon.get(`/pokemon/${num}`);

  dispatch({ type: FETCH_POKEMON, payload: response.data });
};

export const fetchRandom = () => async (dispatch) => {
  const randomNum = Math.floor(Math.random() * NUMBER_OF_POKEMON + 1);
  const response = await pokemon.get(`/pokemon/${randomNum}`);

  dispatch({ type: FETCH_RANDOM, payload: response.data });
};
