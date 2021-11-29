import React, { useContext, useHistory } from "react";
import { MovieContext } from "../context/movieContext";
import { LoadingContext } from "../context/loadingContext";
import { getMovie } from "../services/movieService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [movie, setMovie] = useContext(MovieContext);
  const [loading, setLoading] = useContext(LoadingContext);

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
        className="col-md-3 col-lg-2 d-md-block text-white bg-dark sidebar collapse App-Header"
      >
        <div className="position-sticky pt-3 ">
          <ul className="nav flex-column">
            <li className="nav-item" onClick={() => getMovieInfo(4)}>
              <Link className="nav-link movie-link" to="/">
                Episode I: The Phantom Menace
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(5)}>
              <Link className="nav-link movie-link" to="/">
                Episode II: Attack Of The Clones
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(6)}>
              <Link className="nav-link movie-link" to="/">
                Episode III: Revenge Of The Sith
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(1)}>
              <Link className="nav-link movie-link" to="/">
                Episode IV: A New Hope
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(2)}>
              <Link className="nav-link movie-link" to="/">
                Episode V: The Empire Strikes Back
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(3)}>
              <Link className="nav-link movie-link" to="/">
                Episode VI: Return Of the Jedi
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default SideBar;
