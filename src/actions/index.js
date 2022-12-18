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

//toggle  favourites Tab
export const toggleFavTab = (value) => {
  return {
    type: SHOW_FAV,
    value,
  };
};

//add movie from search
export const addSearchResult = (movie) => {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
};

//handel search
export const handelMovieSearch = (searchText) => {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        dispatch(addSearchResult(movie));
      });
  };
};

//add movie from search to list
export const addMovieToList = (movie) => {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
};

/*------------------ Action types ------------------*/
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SHOW_FAV = "SHOW_FAV";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
