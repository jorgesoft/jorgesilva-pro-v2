import React from "react";

const EvaluacionSegura = () => (
  <section className="py-5 text-center">
    <div className="container">
      <h2 className="mb-4">Evaluación diseñada para ser segura y de bajo riesgo</h2>
      <p className="lead mb-4">
        Este servicio no realiza pruebas invasivas ni simulaciones de ataque. 
        Utilizamos únicamente herramientas de código abierto que analizan información pública disponible en internet.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded h-100">
                <h5 className="fw-bold">🔍 No intrusiva</h5>
                <p className="mb-0">No escaneamos internamente tus servidores, no hay pruebas de explotación, ni ningún tipo de ataque.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded h-100">
                <h5 className="fw-bold">🔐 Respeto a tu privacidad</h5>
                    <p className="mb-0">
                    Tu información solo se utiliza para generar tu informe personalizado. 
                    Analizamos los datos de forma segura y privada usando{" "}
                    <a
                        href="https://azure.microsoft.com/en-us/products/ai-foundry"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Azure AI Foundry
                    </a>.
                    </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded h-100">
                <h5 className="fw-bold">✅ 100% informativa</h5>
                <p className="mb-0">La evaluación es solo para ayudarte a entender tu exposición externa. No implica responsabilidad legal ni técnica por nuestra parte.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EvaluacionSegura;
