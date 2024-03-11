import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [navbarColor, setNavbarColor] = useState("var(--2)");

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 20) {
      setNavbarColor("#1c1c1cc5");
    } else {
      setNavbarColor("var(--2)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <br />
      <nav
        className="navbar navbar-expand-lg section"
        data-bs-theme="dark"
        style={{ backgroundColor: navbarColor }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontFamily: "serif", fontWeight: "bolder" }}
          >
            &nbsp; MayankPruthi
          </Link>

          <button
            className="navbar-toggler nav-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  style={{
                    color: location.pathname === "/" ? "var(--4)" : "var(--3)"
                  }}
                >
                  &nbsp; &nbsp; Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/projects"
                  style={{
                    color:
                      location.pathname === "/projects"
                        ? "var(--4)"
                        : "var(--3)"
                  }}
                >
                  &nbsp; &nbsp; Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/services"
                  style={{
                    color:
                      location.pathname === "/services"
                        ? "var(--4)"
                        : "var(--3)"
                  }}
                >
                  &nbsp; &nbsp; Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{
                    color:
                      location.pathname === "/contact" ? "var(--4)" : "var(--3)"
                  }}
                >
                  &nbsp; &nbsp; Contact
                </Link>
              </li>
              <li className="nav-item ">
                <a
                  href="https://drive.google.com/file/d/1Q5nEJXCbOC3qqOS0VmVAO1oz2QUQHcWT/view"
                  className="nav-link"
                  target="_blank"
                >
                  &nbsp; &nbsp;
                  <span className="nav-resume-btn">
                    Resume &nbsp;
                    <span>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAU0lEQVR4nO3QsQqAMAxF0ffXHdM/v+KgQ0qtaCxIc6BLh3ch0jJwMtAgTzRCnsgDij/LBdOHEXs0fjNir8YHkZjxTiR2/ADU/Z0fKRTBND2gv9oAVZTQEh7ZErUAAAAASUVORK5CYII="
                        alt="&darr;"
                        width="14px"
                      />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
