import { FETCH_POKEMON } from './types';
import pokemon from '../apis/pokemon';

export default num => async (dispatch) => {
  const response = await pokemon.get(`/pokemon/${num}`);

  dispatch({ type: FETCH_POKEMON, payload: response.data });
};
