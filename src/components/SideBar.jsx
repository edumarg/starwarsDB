import React, { useContext, useHistory } from "react";
import { MovieContext } from "../context/movieContext";
import { getMovie } from "../services/movieService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [movie, setMovie] = useContext(MovieContext);

  const getMovieInfo = async (id) => {
    let MyMovie = undefined;
    try {
      const response = await getMovie(id);
      MyMovie = response.data;
      setMovie(MyMovie);
    } catch (exception) {
      if (exception.response && exception.response.status === 404) {
        toast.error("Movie not found");
      }
    }
  };
  return (
    <React.Fragment>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <button
          className="navbar-toggler d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p className="navbar-toggler-icon"></p>
        </button>
        <p className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          Star Wars Films
        </p>
      </header>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item" onClick={() => getMovieInfo(4)}>
              <Link className="nav-link" to="/">
                Episode I: The Phantom Menace
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(5)}>
              <Link className="nav-link" to="/">
                Episode II: Attack Of The Clones
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(6)}>
              <Link className="nav-link" to="/">
                Episode III: Revenge Of The Sith
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(1)}>
              <Link className="nav-link" to="/">
                Episode IV: A New Hope
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(2)}>
              <Link className="nav-link" to="/">
                Episode V: The Empire Strikes Back
              </Link>
            </li>
            <li className="nav-item" onClick={() => getMovieInfo(3)}>
              <Link className="nav-link" to="/">
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
