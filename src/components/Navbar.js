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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          jorgesilva.pro
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
              <Link className="nav-link" to="/servicios-latam">
                Servicios LATAM
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
            <li className="nav-item d-flex align-items-center">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="themeSwitch"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <label className="form-check-label" htmlFor="themeSwitch">
                  <i
                    className={`bi ${
                      theme === "dark" ? "bi-moon-stars-fill" : "bi-sun-fill"
                    }`}
                  ></i>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
