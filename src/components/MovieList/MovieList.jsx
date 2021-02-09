import { MovieEntry } from "../MovieEntry/MovieEntry.jsx";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import "./MovieList.css";
import { useFavoriteStatus } from "../../hooks/useFavoriteStatus.js";

export const MovieList = ({ searchQuery }) => {
  const movies = useMovieSearch(searchQuery);

  if (movies.loading) return <div>Loading...</div>;
  if (movies.error) return <div>Error: {movies.error.message}</div>;
  if (movies.data) {
    const movieListElements = movies.data.map((movie) => {
      return <MovieEntry key={movie.imdbID} posterUrl={movie.Poster} title={movie.Title} imdbID={movie.imdbID} />;
    });
    return <div className="movie-list">{movieListElements}</div>;
  }

  return (
    <div>
      <p> No movies matches the search criteria</p>
    </div>
  );
};
