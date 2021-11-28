import React, { createContext, useState } from "react";

export const MovieContext = createContext(undefined);
MovieContext.displayName = "MovieContext";

export const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState(undefined);

  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {children}
    </MovieContext.Provider>
  );
};
