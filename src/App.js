import "./App.css";
import { MovieList } from "./components/MovieList/MovieList";
import { useState } from "react";
import { useFavoriteMovies } from "./hooks/useFavoriteStatus";
import { MovieEntry } from "./components/MovieEntry/MovieEntry";

function App() {
  const [searchQuery, setSearchQuery] = useState("ses");
  const [favoriteMovies] = useFavoriteMovies();

  const favoriteMovieElements = favoriteMovies.map((e, i) => <MovieEntry key={i} imdbID={e.imdbID} posterUrl={e.posterUrl} title={e.title} />);

  return (
    <div className="App">
      <div className="container">
        <h1 className="movie-list-header"> Movies </h1>
        <input className="container-input" type="text" onChange={changeSearcCriteria} value={searchQuery} placeholder="Type to search..." />
      </div>
      <MovieList searchQuery={searchQuery} />
      <div className="container">
        <h1 className="movie-list-header"> Favorites </h1>
      </div>
      <div className="movie-list">{favoriteMovieElements}</div>
    </div>
  );

  function changeSearcCriteria(event) {
    setSearchQuery(event.target.value);
  }

  // TODO: Functionerne skal jo være på det enkelte element. Skal vi så måske lave et kriterie på Movie-List der spørger om det komponent er favorites, så den håndterer det på en anden måde?
}

export default App;
