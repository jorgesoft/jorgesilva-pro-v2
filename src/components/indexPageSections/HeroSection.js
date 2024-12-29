import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
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
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <StaticImage
              src="../../images/profile-pic.png" // Adjust the path to the image location
              alt="Jorge Silva"
              className="img-fluid"
              style={{ maxWidth: "250px" }}
              placeholder="blurred" // Optional: Adds a blurred placeholder while the image loads
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="row">
          <div className="col-12 text-center mt-5">
            <a
              href="#what-i-do"
              className="text-decoration-none icon-clickable"
            >
              <i className="bi bi-chevron-down" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
