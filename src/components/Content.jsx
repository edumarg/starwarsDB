import React, { useState, useEffect, useContext, useLocalStorage } from "react";
import { MovieContext } from "../context/movieContext";
import { LoadingContext } from "../context/loadingContext";
import logo from "../files/star-wars-logo-500.png";
import Like from "./like";

const Content = () => {
  const [movie] = useContext(MovieContext);
  const [loading] = useContext(LoadingContext);
  let moviesLength = 6;

  const favoritesInitArray = [...Array(moviesLength)].map((x) => false);
  const [favorites, setFavorites] = useState(favoritesInitArray);

  useEffect(() => {
    const myFavorites = JSON.parse(window.localStorage.getItem("favorites"));
    setFavorites(myFavorites || favoritesInitArray);
  }, []);

  const handleFavorites = (id) => {
    const index = id - 1;
    let myFavorites = [...favorites];
    myFavorites[index] = !myFavorites[index];
    setFavorites(myFavorites);
    window.localStorage.setItem("favorites", JSON.stringify(myFavorites));
  };

  return (
    <React.Fragment>
      <main className="col-sm-12 ms-sm-auto col-md-10 px-md-4 App-Header my-content">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {loading ? (
          <div>
            <div
              className="spinner-border text-warning"
              style={{ width: "5rem", height: "5rem", margin: "100px auto" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : movie?.title ? (
          <div style={{ margin: "15px 0" }}>
            <h3>
              <span>{`Episode ${movie.episode_id}: ${movie.title}`}</span>
            </h3>
            <p className="mb-0">{`Directed by: ${movie.director}`}</p>
            <p>{`Release Date: ${movie.release_date}`}</p>
            <h4 className="my-4" style={{ width: "60%", margin: "0 auto" }}>
              {`${movie.opening_crawl}`}
            </h4>
            <Like
              onClick={() => handleFavorites(movie.episode_id)}
              like={favorites[movie.episode_id - 1] || 0}
            />
          </div>
        ) : (
          <div style={{ width: "50%", margin: "0 auto" }}>
            <h1>Welcome to Star Wars Movies Data Base</h1>
            <h2>Please choose a movie to see the information</h2>
          </div>
        )}
      </main>
    </React.Fragment>
  );
};

export default Content;
