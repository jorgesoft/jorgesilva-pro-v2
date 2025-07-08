import React from "react";

const SobreMi = () => (
  <section className="py-5 text-center">
    <div className="container">
      <h2 className="mb-4">¿Quién está detrás de esto?</h2>
      <p className="lead mb-4">
        Soy Jorge Silva, especialista en ciberseguridad y computación en la nube con más de 7 años de experiencia ayudando a organizaciones a proteger su infraestructura digital.
      </p>

      <div className="row justify-content-center mb-3">
        <div className="col-md-8">
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item">
              🎓 Graduado en <strong>Cloud Computing</strong> (WGU) y <strong>Cybersecurity</strong> (NYU)
            </li>
            <li className="list-group-item">
              📚 Más de <strong>15 certificaciones</strong> en seguridad, nube y tecnología
            </li>
            <li className="list-group-item">
              🧠 Experiencia con startups, PYMEs y entornos de misión crítica
            </li>
          </ul>
        </div>
      </div>

      <a
        href="https://www.linkedin.com/in/jorgeecsilva/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary"
      >
        Ver perfil en LinkedIn
      </a>
    </div>
  </section>
);

export default SobreMi;
