import { FETCH_POKEMON, FETCH_RANDOM } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_RANDOM:
      return { ...state, random: action.payload };
    default:
      return state;
  }
};
