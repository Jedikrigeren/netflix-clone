import { createContext, useState } from "react";

export const MovieStoreContext = createContext(null);
export const MovieStore = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(JSON.parse(localStorage.getItem("favoriteMovies")) ?? []);
  /*  QUESTION Jeg er ikke helt sikker på hvad den her kontekst i virkeligheden gør. Jeg forstår at den opdaterer alting,
    og den holder styr på mine favorite movies. Men hvordan? Hvad er det den gør?
*/
  return <MovieStoreContext.Provider value={[favoriteMovies, setFavoriteMovies]}>{children}</MovieStoreContext.Provider>;
};
