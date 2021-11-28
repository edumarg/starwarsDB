import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const SideBar = () => {
  return (
    <React.Fragment>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p className="navbar-toggler-icon"></p>
        </button>
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Star Wars Films
        </a>
      </header>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Episode I: The Phantom Menace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Episode II: Attack Of The Clones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Episode III: Revenge Of The Sith
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Episode IV: A New Hope
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                V: The Empire Strikes Back
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="layers"></span>
                Episode VI: Return Of the Jedi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="layers"></span>
                Episode VII: The Force Awakens
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="layers"></span>
                Episode VIII: The Last Jedi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="layers"></span>
                Episode VI: The Rise Of Skywalker
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
        <span className="fs-4">Star Wars Movies</span>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>Episode I: The Phantom Menace </li>
          <li>Episode II: Attack Of The Clones</li>
          <li>Episode II: Revenge Of The Sith</li>
          <li>Episode IV: A New Hope</li>
          <li>Episode V: The Empire Strikes Back</li>
          <li>Episode VI: Return Of the Jedi</li>
          <li>Episode VII: The Force Awakens</li>
          <li>Episode VIII: The Last Jedi</li>
          <li>Episode IX: The Rise Of Skywalker</li>
        </ul>
      </div> */}
    </React.Fragment>
  );
};

export default SideBar;
