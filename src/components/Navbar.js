import React from "react";
import { handelMovieSearch, addMovieToList } from "../actions";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handelOnChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handelSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handelMovieSearch(searchText));
  };

  handelAddToList = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  };
  render() {
    const { result, showSearchResult } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handelOnChange} />
          <button id="search-btn" onClick={this.handelSearch}>
            Search
          </button>
          {showSearchResult && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="poster" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button
                    onClick={() => {
                      console.log("Clicked");
                      this.handelAddToList(result);
                    }}
                  >
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
