import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  const experience = [
    {
      title: "Senior Network Security Analyst",
      company: "Delta Dental of New Jersey",
      duration: "2019 - Present",
      description:
        "Leading technology operations related to security, including email security, endpoint security, firewalls, incident response, and compliance efforts.",
    },
    {
      title: "Security Consultant",
      company: "Freelance",
      duration: "2017 - 2019",
      description:
        "Provided security assessments and implemented open-source solutions for SMBs to improve their security posture.",
    },
  ];

  const education = [
    {
      degree: "Master's in Cybersecurity",
      school: "New York University",
      year: "2025",
    },
    {
      degree: "Bachelor's in Computer Science",
      school: "Western Governors University",
      year: "2022",
    },
  ];

  const certifications = [
    "Certified Information Systems Security Professional (CISSP)",
    "AWS Certified Solutions Architect – Associate",
    "Microsoft Certified: Azure Engineer",
    "Google Cloud Cloud Engineer",
  ];

  const projects = [
    {
      name: "Nubitlan Security Platform",
      description:
        "A cybersecurity SaaS platform for SMBs, leveraging open-source tools to provide security awareness, GRC, and more.",
    },
    {
      name: "HoneyLab",
      description:
        "A honeynet research project that tracks threat actor behavior in cloud environments.",
    },
    {
      name: "Resume Builder App",
      description:
        "A Django-based web app allowing users to create customizable resumes with rich features.",
    },
  ];

  return (
    <Layout>
      <div className="container mt-5">
        {/* About Me Section */}
        <header className="mb-5 text-center">
          <h1 className="text-body">About Me</h1>
          <p className="lead text-body">
            A passionate cybersecurity and cloud professional with a focus on
            delivering impactful solutions.
          </p>
        </header>

        {/* Experience Section */}
        <section className="mb-5">
          <h2 className="text-body">Experience</h2>
          <div className="row">
            {experience.map((exp, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{exp.title}</h5>
                    <h6 className="card-subtitle text-muted">{exp.company}</h6>
                    <p className="card-text">{exp.duration}</p>
                    <p className="card-text">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-5">
          <h2 className="text-body">Education</h2>
          <ul className="list-group">
            {education.map((edu, index) => (
              <li key={index} className="list-group-item">
                <strong>{edu.degree}</strong> - {edu.school} ({edu.year})
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="mb-5">
          <h2 className="text-body">Certifications</h2>
          <ul className="list-group">
            {certifications.map((cert, index) => (
              <li key={index} className="list-group-item">
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-body">Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About Me" />;