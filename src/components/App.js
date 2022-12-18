import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies, toggleFavTab } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log(store.getState());
  }
  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };
  handelToggleFavTab = (value) => {
    const { store } = this.props;
    store.dispatch(toggleFavTab(value));
  };
  render() {
    const { movies, search } = this.props.store.getState();
    const { showFav, list, favourites } = movies;
    const displayMovies = showFav ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFav ? "" : "active-tabs"}`}
              onClick={() => {
                this.handelToggleFavTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFav ? "active-tabs" : ""}`}
              onClick={() => {
                this.handelToggleFavTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.length === 0 && (
              <div className="no-movies">No Movies to display !</div>
            )}
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movie-${index}`}
                  dispatch={this.props.store.dispatch}
                  isMovieFav={this.isMovieFav(movie)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
