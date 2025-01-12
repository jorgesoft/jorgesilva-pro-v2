import React from "react";

const ProfessionalJourney = () => {
  return (
    <section className="my-5">
      <h2 className="text-body text-center mb-4">My Professional Journey</h2>
      <div className="timeline">
        {/* Timeline Items */}
        {[
          {
            year: "2016",
            title: "Discovering Enterprise Technology",
            description:
              "My journey into technology began in 2016. Following tech news sparked my curiosity about how systems work, leading me to explore computing, networks, and automation with Python.",
          },
          {
            year: "2018",
            title: "Help Desk Technician, Midtown Manhattan",
            description:
              "I transitioned into IT as a Help Desk Technician for a small e-commerce company in Midtown Manhattan, where I worked with Active Directory, Cisco Networks, AWS, and Azure.",
          },
          {
            year: "2020",
            title: "Cloud Operations Specialist — Logicworks",
            description:
              "Joined Logicworks as a Cloud Operations Specialist, managing and maintaining cloud environments for multiple clients.",
          },
          {
            year: "2021",
            title: "SRE Consultant — Launch CG",
            description:
              "Focused on IaC, CI/CD and vulnerability management as a Site Reliability Engineering Consultant at Launch CG.",
          },
          {
            year: "2022",
            title: "BS in Cloud Computing — WGU",
            description:
              "Completed a Bachelor's in Cloud Computing at Western Governors University.",
          },
          {
            year: "2022",
            title: "Cybersecurity Shift — NYU Cyber Fellows Program",
            description:
              "Transitioned into cybersecurity after joining the NYU Cyber Fellows Program.",
          },
          {
            year: "Present",
            title: "Senior Security Analyst",
            description:
              "Currently leading cybersecurity initiatives as a Senior Security Analyst.",
          },
        ].map((item, index) => (
          <div key={index} className="timeline-item mb-4">
            <h5 className="text-body">{`${item.year} — ${item.title}`}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* LinkedIn Call to Action */}
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
    </section>
  );
};

export default ProfessionalJourney;
