import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies } from "../actions";
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
  componentDidUpdate() {
    const { store } = this.props;
    console.log(store.getState());
  }
  isMovieFav = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    const movies = this.props.store.getState().list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
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
