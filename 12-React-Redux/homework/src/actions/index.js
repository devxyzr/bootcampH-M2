export function getMovies(title) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
      .then((response) => response.json())
      .then((movies) => dispatch({ type: "GET_MOVIES", payload: movies }));
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${id}`)
      .then((response) => response.json())
      .then((detail) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: detail });
      });
  };
}
