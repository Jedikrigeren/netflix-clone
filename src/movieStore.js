import { createContext, useState } from "react";

export const MovieStoreContext = createContext(null);
export const MovieStore = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(JSON.parse(localStorage.getItem("favoriteMovies")) ?? []);

  return <MovieStoreContext.Provider value={[favoriteMovies, setFavoriteMovies]}>{children}</MovieStoreContext.Provider>;
};
