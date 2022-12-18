/*------------------Action creators---------------*/

// add movie action
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
};

//add movie to fav action
export const addToFav = (movie) => {
  return {
    type: ADD_TO_FAV,
    movie: movie,
  };
};

//remove movie from fav action
export const removeFromFav = (movie) => {
  return {
    type: REMOVE_FROM_FAV,
    movie: movie,
  };
};

/*------------------ Action types ------------------*/
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
