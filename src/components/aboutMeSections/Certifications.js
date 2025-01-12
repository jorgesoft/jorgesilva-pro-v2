import React from "react";
import cissp from "../../images/certs/cissp.png";
import ccsk from "../../images/certs/ccsk.png";
import cka from "../../images/certs/cka.png";
import awsSysOps from "../../images/certs/awsSysOps.png";
import azureAdmin from "../../images/certs/azureAdmin.png";
import gcpEngineer from "../../images/certs/gcpEngineer.png";

const Certifications = () => {
  const certifications = [
    { src: cissp, alt: "CISSP" },
    { src: ccsk, alt: "CCSK" },
    { src: cka, alt: "CKA" },
    { src: awsSysOps, alt: "AWS SysOps" },
    { src: azureAdmin, alt: "Azure Admin" },
    { src: gcpEngineer, alt: "GCP Engineer" },
  ];

  return (
    <section className="my-5 py-5">
      <h2 className="text-body text-center mb-4">Certifications</h2>
      <p className="text-center text-muted mb-5">
        I hold several technology certifications, most of which can be found on my{" "}
        <a
          href="https://www.credly.com/users/jorge-carrillo-silva"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body"
        >
          Credly profile
        </a>.
      </p>

      <div className="container">
        <div className="row justify-content-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 d-flex justify-content-center mb-4"
            >
              <div
                className="cert-card d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "100px",
                  height: "100px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  style={{
                    maxWidth: "80px",
                    maxHeight: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
