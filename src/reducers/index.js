import { ADD_MOVIES, ADD_TO_FAV } from "../actions";
// initial statee\
const initialMoviesState = {
  list: [],
  favourites: [],
};

// movies reducer
export default function movies(state = initialMoviesState, action) {
  /**********  In react community if-else is not used***************/

  // if (action.type === ADD_MOVIES) {
  //   return { ...state, list: [...state.list, ...action.movies] };
  // } else if (action.type === ADD_TO_FAV) {
  //   return {
  //     ...state,
  //     favourites: [...state.favourites, action.movie],
  //   };
  // }
  // return state;

  /**********  In react community switch is used***************/

  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, list: [...action.movies] };
    case ADD_TO_FAV:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    default:
      return state;
  }
}
