import React from "react";

const ComoFunciona = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">¿Cómo funciona?</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ol className="list-group list-group-numbered">
            <li className="list-group-item py-3">
              <strong>Contáctame:</strong> Por ahora es el metodo de iniciar la evaluación.
            </li>
            <li className="list-group-item py-3">
              <strong>Agendar entrevista:</strong> Para saber mas de tu empresa y hablar de nuestros servicios.
            </li>
            <li className="list-group-item py-3">
              <strong>Ejecutamos el análisis:</strong> Usando herramientas automáticas de código abierto.
            </li>
            <li className="list-group-item py-3">
              <strong>Aplicamos IA:</strong> Para ayudarte a interpretar los hallazgos en lenguaje sencillo.
            </li>
            <li className="list-group-item py-3">
              <strong>Te enviamos el informe:</strong> En un archivo PDF por correo electrónico en menos de 48 horas.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default ComoFunciona;
