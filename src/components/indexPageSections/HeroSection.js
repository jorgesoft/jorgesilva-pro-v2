import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex justify-content-center align-items-center text-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-body mb-3">Jorge E. Carrillo Silva, CISSP</h1>
          <p className="lead mb-4">Security | Cloud | DevOps</p>

          {/* Contact Icons */}
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://www.linkedin.com/in/jorgeecsilva/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ fontSize: "2rem", color: "inherit" }}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/jorgesoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ fontSize: "2rem", color: "inherit" }}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="mailto:contact@jorgesilva.pro"
              aria-label="Email"
              style={{ fontSize: "2rem", color: "inherit" }}
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-5">
            <a href="#what-i-do" className="text-decoration-none">
              <i className="bi bi-chevron-double-down" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
