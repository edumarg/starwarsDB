import React, { useState, useEffect, useContext, useLocalStorage } from "react";
import { MovieContext } from "../context/movieContext";
import { LoadingContext } from "../context/loadingContext";
import logo from "../files/star-wars-logo-981.png";
import Like from "./like";

const Content = () => {
  const [movie] = useContext(MovieContext);
  const [loading] = useContext(LoadingContext);
  const [favorites, setFavorites] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const myFavorites = JSON.parse(window.localStorage.getItem("favorites"));
    console.log("myFavorites UE", myFavorites);
    setFavorites(myFavorites || [false, false, false, false, false, false]);
  }, []);

  const handleFavorites = (id) => {
    const index = id - 1;
    console.log("favorites handel", favorites);
    let myFavorites = [...favorites];
    myFavorites[index] = !myFavorites[index];
    setFavorites(myFavorites);
    console.log("my favorites handle", myFavorites);
    window.localStorage.setItem("favorites", JSON.stringify(myFavorites));
  };

  return (
    <React.Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 App-Header my-content">
        <div>
          {/* <h1>Star Wars</h1> */}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {loading ? (
          <div
            className="spinner-border text-warning"
            style={{ width: "10rem", height: "10rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : movie?.title ? (
          <div>
            <h3>
              <span>{`Episode ${movie.episode_id}: ${movie.title}`}</span>
            </h3>
            <p className="mb-0">{`Directed by: ${movie.director}`}</p>
            <p>{`Release Date: ${movie.release_date}`}</p>
            <h4 className="my-4" style={{ width: "50%", margin: "0 auto" }}>
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
