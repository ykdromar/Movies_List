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

/*------------------ Action types ------------------*/
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAV = "ADD_TO_FAV";
