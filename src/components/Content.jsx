import React, { useEffect, useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Content = () => {
  const [movie] = useContext(MovieContext);

  useEffect(() => {}, [movie]);

  return (
    <React.Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {movie?.title ? (
          <div>
            <h1>Star Wars</h1>
            <h3>
              <span>{`Episode ${movie.episode_id}: ${movie.title}`}</span>
            </h3>
            <p className="mb-0">{`Directed by: ${movie.director}`}</p>
            <p>{`Release Date: ${movie.release_date}`}</p>
            <h4
              className="my-4"
              style={{ width: "50%", margin: "0 auto" }}
            >{`${movie.opening_crawl}`}</h4>
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
