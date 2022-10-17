import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieID = this.props.match.params.id;
    this.props.getMovieDetail(movieID);
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>{this.props.movie.Title}</h1>
        <h4>{this.props.movie.Year}</h4>
        <h4>{this.props.movie.Rated}</h4>
        <h4>{this.props.movie.Released}</h4>
        <h4>{this.props.movie.Genre}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (movieID) => dispatch(getMovieDetail(movieID)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
