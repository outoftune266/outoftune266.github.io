import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="/">
        <span class="d-block d-lg-none">Zak Monnet</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/assets/images/headshot.jpeg"
            alt=""
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/education"
              className={
                location.pathname === "/education"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Education
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/skills"
              className={
                location.pathname === "/skills" ? "nav-link active" : "nav-link"
              }
            >
              Skills
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/interests"
              className={
                location.pathname === "/interests"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
