import "./MovieEntry.css";
import { useState } from "react";
import { useFavoriteMovies } from "../../hooks/useFavoriteStatus";

export const MovieEntry = ({ title, posterUrl, imdbID }) => {
  const [favoriteMovies, { addMovieToFavorites, removeMovieFromFavorites }] = useFavoriteMovies();

  const isFavortied = favoriteMovies.some((e) => e.imdbID === imdbID);
  const action = isFavortied ? handleUnFavorite : handleFavorite;
  const actionTest = isFavortied ? "remove favorite" : "add favorite";
  return (
    <div className="movie-entry-container">
      <img src={posterUrl} className="movie-poster" alt={title}></img>
      <a className="set-favorite" onClick={action}>
        {actionTest}
      </a>
    </div>
  );

  function handleFavorite() {
    addMovieToFavorites(title, imdbID, posterUrl);
    console.log("this is now a Favorite");
    // do stuff
  }
  function handleUnFavorite() {
    removeMovieFromFavorites(imdbID);
    console.log("this is no longer a Favorite");
    // do stuff
  }
};
