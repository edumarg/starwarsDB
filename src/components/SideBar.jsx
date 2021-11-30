import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/movieContext";
import { MoviesContext } from "../context/moviesContext";
import { LoadingContext } from "../context/loadingContext";
import { getMovie } from "../services/movieService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [, setMovie] = useContext(MovieContext);
  const [, setLoading] = useContext(LoadingContext);
  const [, setMovies] = useContext(MoviesContext);

  const myMovies = [
    { title: "Episode I : The Phantom Menace", id: 4 },
    { title: "Episode II: Attack Of The Clones", id: 5 },
    { title: "Episode III: Revenge Of The Sith", id: 6 },
    { title: "Episode IV: A New Hope", id: 1 },
    { title: "Episode V: The Empire Strikes Back", id: 2 },
    { title: "Episode VI: Return Of the Jedi", id: 3 },
  ];

  useEffect(() => setMovies(myMovies), [myMovies]);

  const getMovieInfo = async (id) => {
    let MyMovie = undefined;
    setLoading(true);
    try {
      const response = await getMovie(id);
      MyMovie = response.data;
      setMovie(MyMovie);
    } catch (exception) {
      if (exception.response && exception.response.status === 404) {
        toast.error("Movie not found");
      }
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <nav
        id="sidebarMenu"
        className="col-sm-12 col-md-2 d-md-block text-white bg-dark sidebar collapse App-Header"
      >
        <div className="position-sticky pt-3 ">
          <ul className="nav flex-column">
            {myMovies.map((movie) => {
              return (
                <li
                  key={movie.id}
                  className="nav-item"
                  onClick={() => getMovieInfo(movie.id)}
                >
                  <Link className="nav-link movie-link" to="/">
                    {movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default SideBar;
