import React from "react";
import { addToFav } from "../actions";

class MovieCard extends React.Component {
  handelAddToFav = () => {
    const { movie, dispatch } = this.props;
    dispatch(addToFav(movie));
  };
  handelRemoveFromFav = () => {};
  render() {
    const { movie, isMovieFav } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={movie.poster}></img>
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isMovieFav ? (
              <button className="unfavourite-btn">Unfavourite</button>
            ) : (
              <button className="favourite-btn" onClick={this.handelAddToFav}>
                Favourites
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
