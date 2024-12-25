import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "bootstrap-icons/font/bootstrap-icons.css"; // Include Bootstrap Icons

const Navbar = () => {
  const [theme, setTheme] = useState("dark"); // Default to dark mode

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-bs-theme", savedTheme);
    } else {
      document.body.setAttribute("data-bs-theme", "dark"); // Default to dark mode
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const setThemeValue = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          JS.PRO
        </Link>
        <button
          className="navbar-toggler"
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="theme-menu"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-label="Toggle theme"
              >
                <i className="bi bi-circle-half"></i>
                <span className="d-lg-none ms-2">Toggle Theme</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="theme-menu"
              >
                <li>
                  <button
                    type="button"
                    className={`dropdown-item d-flex align-items-center ${
                      theme === "light" ? "active" : ""
                    }`}
                    data-bs-theme-value="light"
                    aria-pressed={theme === "light"}
                    onClick={() => setThemeValue("light")}
                  >
                    <i className="bi bi-sun-fill"></i>
                    <span className="ms-2">Light</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`dropdown-item d-flex align-items-center ${
                      theme === "dark" ? "active" : ""
                    }`}
                    data-bs-theme-value="dark"
                    aria-pressed={theme === "dark"}
                    onClick={() => setThemeValue("dark")}
                  >
                    <i className="bi bi-moon-stars-fill"></i>
                    <span className="ms-2">Dark</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
