import React from "react";

const HeroSeguridad = () => (
  <section className="py-5">
    <div className="container text-center">
      <h1 className="display-5 fw-bold">
        Evaluación de Seguridad Externa para Empresas en América Latina
      </h1>
      <p className="lead mt-3 mb-4">
        Protege tu empresa con una evaluación que revela cómo un atacante vería
        tu infraestructura desde el internet. Analizamos tu dominio para identificar vulnerabilidades externas, de forma segura y sin afectar tus servicios.
      </p>
      <p className="lead mt-3 mb-4">
        Programe tu evaluación o <a href="https://www.linkedin.com/in/jorgeecsilva/" target="_blank" className="text-decoration-underline">contáctame</a> para mas detalles.
      </p>
      <p className="text-muted">
        Al agendar una evaluación aceptas nuestros {" "}
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
          href="https://cal.com/jorgesilva.pro/evaluacion-de-seguridad-externa"
          target="_blank"
          className="btn btn-primary btn-lg px-4 me-sm-3"
        >
          Programe su evaluación
        </a>
        <a
          href="https://jorgecarrilloitgmail-my.sharepoint.com/:f:/g/personal/contact_jorgesilva_pro/Eh1lTWG6PVpKjOapbOYYy1QB-cwMGYvDaBOAMf1X21ia7w?e=Wte4Ov"
          target="_blank"
          className="btn btn-light btn-lg px-4"
        >
          Ejemplo de resultados
        </a>
      </div>
    </div>
  </section>
);

export default HeroSeguridad;
