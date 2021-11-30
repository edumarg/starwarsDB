import React, { createContext, useState } from "react";

export const MoviesContext = createContext(undefined);
MoviesContext.displayName = "MoviesContext";

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState(undefined);

  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {children}
    </MoviesContext.Provider>
  );
};
