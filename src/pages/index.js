import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="text-body">Jorge Silva</h1>
              <p className="lead">
                Senior Network Security Analyst | CISSP-Certified | DevSecOps Expert
              </p>
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
                src="/h.svg"
                alt="Jorge Silva"
                className="img-fluid"
                style={{ maxWidth: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>


      {/* What I Do Section */}
      <div className="container my-5">
        <h2 className="text-center text-body">What I Do</h2>
        <p className="text-center text-muted">
          Combining technical expertise with a passion for security
        </p>
        <div className="row mt-4">
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Network Security</h5>
                <p className="card-text">
                  Designing and securing networks to protect against modern
                  threats.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cloud Security</h5>
                <p className="card-text">
                  Implementing secure and cost-effective solutions across AWS,
                  Azure, and GCP.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Open-Source Security</h5>
                <p className="card-text">
                  Leveraging tools like Wazuh, Elastic SIEM, and Bitwarden to
                  empower SMBs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Security Awareness</h5>
                <p className="card-text">
                  Creating free and open-source platforms to educate and protect
                  organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-5">
        <div className="container text-center">
          <h2 className="text-body">From the Blog</h2>
          <p className="text-muted">
            Explore my thoughts on cybersecurity, DevSecOps, and cloud security.
          </p>
          <a href="/blog" className="btn btn-primary btn-lg">
            Read My Blog
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
