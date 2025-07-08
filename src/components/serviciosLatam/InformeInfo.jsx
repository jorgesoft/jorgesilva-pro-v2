import React from "react";

const InformeInfo = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">¿Qué incluye la evaluación?</h2>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100">
            <h5 className="fw-bold mb-2">🛰️ Descubrimiento de Subdominios</h5>
            <p className="mb-0">
              Identificamos subdominios públicos relacionados con tu empresa usando herramientas OSINT como Subfinder.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100">
            <h5 className="fw-bold mb-2">🔍 Detección de Tecnologías</h5>
            <p className="mb-0">
              Escaneamos tus servicios web con WhatWeb para identificar frameworks, servidores y configuraciones expuestas.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100">
            <h5 className="fw-bold mb-2">🛡️ Escaneo de Puertos</h5>
            <p className="mb-0">
              Usamos Nmap para descubrir servicios abiertos y posibles puntos de entrada desde internet.
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100 text-center">
            <h5 className="fw-bold mb-2">📧 Emails y contraseñas</h5>
            <p className="mb-0">
            Evaluamos tu configuración de seguridad de correo electrónico y las contraseñas filtradas relacionadas.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 border rounded h-100 text-center">
            <h5 className="fw-bold mb-2">🧠 Análisis asistido por IA</h5>
            <p className="mb-0">
              Usamos inteligencia artificial para ayudarte a entender los riesgos encontrados y Y hacer un plan de acción para mitigarlos. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InformeInfo;
