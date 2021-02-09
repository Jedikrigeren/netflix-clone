import { useContext, useState } from "react";
import { MovieStoreContext } from "../movieStore";

export function useFavoriteMovies() {
  const [favoriteMovies, _setFavoriteMovies] = useContext(MovieStoreContext);

  return [favoriteMovies, { addMovieToFavorites, removeMovieFromFavorites }];

  function addMovieToFavorites(title, imdbID, posterUrl) {
    setFavoriteMovies(favoriteMovies.concat({ title, imdbID, posterUrl }));
  }

  function removeMovieFromFavorites(imdbID) {
    setFavoriteMovies(favoriteMovies.filter((e) => e.imdbID !== imdbID));
  }

  function setFavoriteMovies(movies) {
    console.log(movies);
    _setFavoriteMovies(movies);
    localStorage.setItem("favoriteMovies", JSON.stringify(movies));
  }
}
