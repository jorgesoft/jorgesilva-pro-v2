import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import AboutHero from "../components/aboutMeSections/AboutHero";
import ProfessionalJourney from "../components/aboutMeSections/ProfessionalJourney";
import Certifications from "../components/aboutMeSections/Certifications";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <AboutHero />
        <div className="divider"></div>
        <ProfessionalJourney />
        <div className="divider"></div>
        <Certifications />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
