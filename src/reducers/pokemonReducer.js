import { FETCH_POKEMON } from '../actions/types';

export default (state = {}, action) => {
  if (action.type === FETCH_POKEMON) {
    console.log({ ...state, [action.payload.id]: action.payload });

    return { ...state, [action.payload.id]: action.payload };
  }

  return state;
};
