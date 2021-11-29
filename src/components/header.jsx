import React from "react";
import logo from "../files/star-wars-logo-981.png";

const Header = () => {
  return (
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
        <img src={logo} alt="logo" width="64" height="32" /> Films
      </p>
    </header>
  );
};

export default Header;
