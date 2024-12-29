import React from "react";
import { Link } from "gatsby";

const WhatIDoSection = () => {
  const features = [
    {
      title: "Cybersecurity",
      icon: <i className="bi bi-file-lock"></i>,
      description: "Securing information systems and protecting against cyber threats.",
    },
    {
      title: "Cloud",
      icon: <i className="bi bi-clouds"></i>,
      description:
        "Designing cost-effective and secure cloud solutions. Certified in AWS, Azure, and GCP.",
    },
    {
      title: "DevOps",
      icon: <i className="bi bi-code-slash"></i>,
      description: "Streamlining development and deployment workflows with CI/CD and GitOps.",
    },
    {
      title: "Innovation",
      icon: <i className="bi bi-rocket-takeoff"></i>,
      description: "Transforming complex challenges into opportunities with advanced technology.",
    },
  ];

  return (
    <div id="what-i-do" className="d-flex align-items-center py-5">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center text-body">What I Do</h2>
        <p className="text-center text-muted">
          I have a wide range of skills, including (but not limited to):
        </p>

        {/* Features Section */}
        <div className="row mt-4 gy-4">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 text-center">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  {/* Icon */}
                  <div
                    className="mb-3"
                    style={{
                      fontSize: "3rem",
                    }}
                  >
                    {feature.icon}
                  </div>
                  {/* Title */}
                  <h5 className="card-title">{feature.title}</h5>
                  {/* Description */}
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-5">
          <p className="lead">
            For more details about my background and expertise, check out my{" "}
            <Link to="/about" className="text-body">
              About Me page
            </Link>.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-5">
          <a href="#my-blog" className="text-decoration-none icon-clickable">
            <i className="bi bi-chevron-down" style={{ fontSize: "2rem" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatIDoSection;
