import React from "react";

const TerminosBanner = () => (
  <>
    <section className="py-5 text-center">
      <div className="container">
        <p className="mb-1">
          🔒 Al solicitar el informe, aceptas nuestros{" "}
          <a
            href="#modalTerminos"
            data-bs-toggle="modal"
            className="text-decoration-underline"
          >
            Términos y Condiciones
          </a>.
        </p>
        <p className="mb-4">
          Este servicio no realiza pruebas invasivas y se basa únicamente en análisis de fuentes públicas.
        </p>
        <a
          href="https://cal.com/jorgesilva.pro/evaluacion-de-seguridad-externa"
          target="_blank"
          className="btn btn-primary btn-lg"
        >
          Agendar evaluación o consulta
        </a>
      </div>
    </section>

    {/* Bootstrap Modal */}
    <div
      className="modal fade"
      id="modalTerminos"
      tabIndex="-1"
      aria-labelledby="modalTerminosLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTerminosLabel">
              Términos y Condiciones
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body text-start">
            <p>
              Al adquirir este servicio, aceptas que se realizará un análisis externo sobre tu dominio o sitio web usando herramientas OSINT como Subfinder, WhatWeb y Nmap.
            </p>
            <ul>
              <li>No se ejecutan pruebas invasivas ni ataques.</li>
              <li>No se intenta acceder a sistemas protegidos.</li>
              <li>Solo se analiza información expuesta públicamente en internet.</li>
            </ul>
            <p>
              Parte del informe será generado con asistencia de inteligencia artificial (IA), lo cual implica que algunas recomendaciones pueden contener interpretaciones automáticas o errores. Sin embargo, se revisan manualmente antes de entregarse.
            </p>
            <p>
              No somos responsables de incidentes de seguridad, pérdidas o daños que puedan ocurrir como consecuencia del uso de este servicio. El informe es informativo, no constituye una auditoría formal ni asesoría certificada.
            </p>
            <p>
              Tus datos (dominio y contacto) se almacenan temporalmente para la entrega del informe y pueden eliminarse a solicitud.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TerminosBanner;
