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
    <section className="my-5">
      <h2 className="text-body text-center mb-4">Certifications</h2>
      <p className="text-center text-muted">
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

      <div className="row text-center">
        {certifications.map((cert, index) => (
          <div key={index} className="col-md-4 col-lg-2 mb-4">
            <img
              src={cert.src}
              alt={cert.alt}
              className="img-fluid shadow-sm"
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
            <p className="mt-2">{cert.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
