import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSeguridad from "../components/serviciosLatam/HeroSeguridad";
import InformeInfo from "../components/serviciosLatam/InformeInfo";
import EvaluacionSegura from "../components/serviciosLatam/EvaluacionSegura";
import ComoFunciona from "../components/serviciosLatam/ComoFunciona";
import SobreMi from "../components/serviciosLatam/SobreMi";
import TerminosBanner from "../components/serviciosLatam/TerminosBanner";

export const Head = () => <Seo title="Servicios de Seguridad Externa" />;

const ServiciosLatam = () => {
  return (
    <Layout>
      <HeroSeguridad />
      <div className="divider"></div>

      <InformeInfo />
      <div className="divider"></div>

      <EvaluacionSegura />
      <div className="divider"></div>

      <ComoFunciona />
      <div className="divider"></div>

      <SobreMi />
      <div className="divider"></div>

      <TerminosBanner />
    </Layout>
  );
};

export default ServiciosLatam;
