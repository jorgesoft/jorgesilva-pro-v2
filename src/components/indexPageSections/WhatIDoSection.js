import React from "react";

const WhatIDoSection = () => {
  const features = [
    {
      title: "Cybersecurity",
      icon: <i className="bi bi-file-lock"></i>,
      description: "Securing digital assets and protecting against cyber threats.",
    },
    {
      title: "Cloud",
      icon: <i className="bi bi-clouds"></i>,
      description: "Designing cost-effective and secure cloud solutions. Certified in AWS, Azure, and GCP.",
    },
    {
      title: "DevOps",
      icon: <i className="bi bi-code-slash"></i>,
      description: "Streamlining development and deployment workflows.",
    },
    {
      title: "Entrepreneurship",
      icon: <i className="bi bi-rocket-takeoff"></i>,
      description: "Building innovative solutions and empowering businesses.",
    },
  ];

  return (
    <div id="what-i-do" className="container my-5">
      <h2 className="text-center text-body">What I Do</h2>
      <p className="text-center text-muted">
        I have wide range of skills, including (but not limited to):
      </p>
      <div className="row mt-4">
        {features.map((feature, index) => (
          <div key={index} className="col-md-6 col-lg-3 text-center">
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
    </div>
  );
};

export default WhatIDoSection;
