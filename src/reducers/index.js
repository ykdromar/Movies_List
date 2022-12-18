import { ADD_MOVIES } from "../actions";
// initial statee\
const initialMoviesState = {
  list: [],
  favourites: [],
};

// movies reducer
export default function movies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    return { ...state, list: [...state.list, ...action.movies] };
  }
  return state;
}
