import React from "react";

const WhatIDoSection = () => {
  return (
    <div id="what-i-do" className="container my-5">
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
  );
};

export default WhatIDoSection;
