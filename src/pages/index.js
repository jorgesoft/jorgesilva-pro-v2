import React from "react";
import Layout from "../components/layout";
import HeroSection from "../components/indexPageSections/HeroSection";
import WhatIDoSection from "../components/indexPageSections/WhatIDoSection";
import BlogSection from "../components/indexPageSections/BlogSection";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="divider"></div>
      <WhatIDoSection />
      <div className="divider"></div>
      <BlogSection />
    </Layout>
  );
};

export default IndexPage;
