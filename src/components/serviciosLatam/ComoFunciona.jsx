import React from "react";

const ComoFunciona = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">¿Cómo funciona?</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ol className="list-group list-group-numbered">
            <li className="list-group-item py-3">
              <strong>Agenda una entrevista:</strong> Conocemos tu empresa y autorizas la evaluación externa.
            </li>
            <li className="list-group-item py-3">
              <strong>Exploramos tu dominio:</strong> Identificamos subdominios públicos usando registros SSL.
            </li>
            <li className="list-group-item py-3">
              <strong>Escaneamos servicios expuestos:</strong> Detectamos puertos abiertos y servicios con Nmap.
            </li>
            <li className="list-group-item py-3">
              <strong>Analizamos tu sitio web:</strong> Identificamos tecnologías con WhatWeb.
            </li>
            <li className="list-group-item py-3">
              <strong>Revisamos filtraciones de datos:</strong> Buscamos correos y contraseñas expuestos con Hunter.io y HIBP.
            </li>
            <li className="list-group-item py-3">
              <strong>Aplicamos IA de Microsoft:</strong> Usamos <a href="https://azure.microsoft.com/en-us/products/ai-foundry" target="_blank" rel="noopener noreferrer">Azure AI Foundry</a> para interpretar los hallazgos con lenguaje claro.
            </li>
            <li className="list-group-item py-3">
              <strong>Recibes el informe final:</strong> Incluye hallazgos, puntuación de riesgo y plan de acción personalizado.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default ComoFunciona;
