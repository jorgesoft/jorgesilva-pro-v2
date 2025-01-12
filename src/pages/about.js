import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          {/* Image Section */}
          <div className="col-md-5 text-center">
            <img
              src="/profile.jpg"  // Replace with your actual image path
              alt="Jorge Eduardo Carrillo Silva"
              className="img-fluid rounded-circle shadow-sm"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-7">
            <h1 className="text-body">Learn about me.</h1>
            <p className="lead">
              I'm a passionate cybersecurity and cloud professional with over 7 years of experience in network security, DevSecOps, and open-source solutions. I lead security operations and help businesses build secure, reliable systems.
            </p>
            <p>
              Beyond my professional life, I’m deeply enthusiastic about technology and coding. I love experimenting with new frameworks, developing security tools, and automating workflows. Outside of tech, you can often find me playing guitar, exploring museums, or reading about history and science.
            </p>
          </div>
        </div>
        <div className="divider"></div>

        {/* Background Section */}
        <section className="my-5">
          <h2 className="text-body text-center mb-4">My Professional Journey</h2>
          <div className="timeline">
            {/* 2016 - Factory Work */}
            <div className="timeline-item mb-4">
              <h5 className="text-body">2016 — Discovering Technology in Yonkers</h5>
              <p>
                My journey into technology began in 2016. Following tech news sparked my curiosity about how systems work, leading me to explore computing, networks, and automation in my free time. I worked on getting the CompTIA A+ certification to develop more enterprise-oriented knowledge and troubleshooting skills.
              </p>
            </div>

            {/* Help Desk Role */}
            <div className="timeline-item mb-4">
              <h5 className="text-body">2018 — Help Desk Technician, Midtown Manhattan</h5>
              <p>
                In 2018, I transitioned into IT as a <strong>Help Desk Technician</strong> in Midtown Manhattan. This role introduced me to enterprise technologies like <strong>Active Directory</strong>, <strong>Cisco Networks</strong>, and cloud platforms such as <strong>AWS</strong> and <strong>Azure</strong>.
              </p>
            </div>

            {/* Cloud Operations Specialist */}
            <div className="timeline-item mb-4">
              <h5 className="text-body">Cloud Operations Specialist — Logicworks</h5>
              <p>
                I then joined <strong>Logicworks</strong>, a Cloud MSP, as a <strong>Cloud Operations Specialist</strong>. This role allowed me to deepen my expertise in managing cloud environments and automating infrastructure.
              </p>
            </div>

            {/* SRE Consulting */}
            <div className="timeline-item mb-4">
              <h5 className="text-body">Site Reliability Engineering Consultant — Launch CG</h5>
              <p>
                My next role was as an <strong>SRE Consultant</strong> for <strong>Launch CG</strong>, where I focused on DevOps, cloud infrastructure, and systems deployment.
              </p>
            </div>

            {/* Education Milestone */}
            <div className="timeline-item mb-4">
              <h5 className="text-body">BS in Cloud Computing — Western Governors University (WGU)</h5>
              <p>
                I earned my <strong>Bachelor's in Cloud Computing</strong> from <strong>WGU</strong>, enhancing my technical foundation and expertise in cloud solutions.
              </p>
            </div>

            {/* Pivot to Cybersecurity */}
            <div className="timeline-item mb-4">
              <h5 className="text-body">Cybersecurity Career Shift — NYU Cyber Fellows Program</h5>
              <p>
                After being accepted into the <strong>NYU Cyber Fellows Program</strong>, I pivoted to cybersecurity, blending my cloud knowledge with security practices.
              </p>
            </div>

            {/* Current Role */}
            <div className="timeline-item">
              <h5 className="text-body">Senior Security Analyst — Present</h5>
              <p>
                Today, I serve as a <strong>Senior Security Analyst</strong>, leading cybersecurity initiatives and contributing to enterprise security strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action for LinkedIn */}
        <div className="text-center my-5">
          <p className="text-body lead">
            Want to learn more about my work? Visit my{" "}
            <a
              href="https://www.linkedin.com/in/jorgeecsilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body"
            >
              LinkedIn profile
            </a>
            .
          </p>
        </div>
        <div className="divider"></div>

        {/* Certifications Section */}
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
            {/* Certification Images */}
            {[
              { src: "/certs/cissp.png", alt: "CISSP" },
              { src: "/certs/ccsk.png", alt: "CCSK" },
              { src: "/certs/cka.png", alt: "CKA" },
              { src: "/certs/aws-sysops.png", alt: "AWS SysOps" },
              { src: "/certs/azure-admin.png", alt: "Azure Admin" },
              { src: "/certs/gcp-engineer.png", alt: "GCP Engineer" },
            ].map((cert, index) => (
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
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
