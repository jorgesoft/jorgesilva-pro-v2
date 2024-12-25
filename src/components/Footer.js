import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <div className="container">
        <p className="mb-3 text-muted">Connect with me:</p>
        <div className="mt-2">
          <a
            href="https://www.linkedin.com/in/jorgeecsilva/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            style={{ fontSize: "2rem" }}
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/jorgesoft"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            style={{ fontSize: "2rem" }}
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:contact@jorgesilva.pro"
            style={{ fontSize: "2rem" }}
            aria-label="Email"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <p className="text-muted mt-3 mb-0">
          © {new Date().getFullYear()} Jorge Silva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
