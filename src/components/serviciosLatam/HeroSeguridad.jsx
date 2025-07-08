import React from "react";

const HeroSeguridad = () => (
  <section className="py-5">
    <div className="container text-center">
      <h1 className="display-5 fw-bold">
        Evaluación de Seguridad Externa para Empresas en América Latina
      </h1>
      <p className="lead mt-3 mb-4">
        Protege tu empresa con una evaluación que revela cómo un atacante vería
        tu infraestructura desde el internet. Encuentra vulnerabilidades y oportunidades para mejorar tu seguridad.
      </p>
      <p className="lead mt-3 mb-4">
        Mira un ejemplo de la evaluación o contáctame para obtener el tuyo.
      </p>
      <p className="text-muted">
        Aplican{" "}
        <a
          href="#modalTerminos"
          data-bs-toggle="modal"
          className="text-decoration-underline"
        >
          Términos y Condiciones
        </a>.
      </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
        <a
          href="https://jorgecarrilloitgmail-my.sharepoint.com/:f:/g/personal/contact_jorgesilva_pro/Eh1lTWG6PVpKjOapbOYYy1QB-cwMGYvDaBOAMf1X21ia7w?e=Wte4Ov"
          target="_blank"
          className="btn btn-primary btn-lg px-4 me-sm-3"
        >
          Ejemplo de resultados
        </a>
        <a
          href="mailto:contacto@jorgesilva.pro"
          className="btn btn-light btn-lg px-4"
        >
          Contáctame
        </a>
      </div>
    </div>
  </section>
);

export default HeroSeguridad;
