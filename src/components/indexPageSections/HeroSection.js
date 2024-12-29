import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="text-body">Jorge E. Carrillo Silva</h1>
            <p className="lead">Cybersecurity, Cloud, and DevOps.</p>
            <div className="mt-3">
              {/* Contact Icons */}
              <a
                href="https://www.linkedin.com/in/jorgeecsilva/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                aria-label="LinkedIn"
                style={{ fontSize: "2rem" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/jorgesoft"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                aria-label="GitHub"
                style={{ fontSize: "2rem" }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="mailto:contact@jorgesilva.pro"
                className="me-3"
                aria-label="Email"
                style={{ fontSize: "2rem" }}
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="/1728926179673.jpeg"
              alt="Jorge Silva"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-5">
            <a href="#what-i-do" className="text-decoration-none icon-clickable">
              <i className="bi bi-chevron-down" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
