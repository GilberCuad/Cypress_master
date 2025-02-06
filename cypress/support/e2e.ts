import "@badeball/cypress-cucumber-preprocessor/support";

Cypress.on("uncaught:exception", (err, runnable) => {
  // 🔹 Evita que Cypress falle por errores no manejados en la página
  console.warn("Error no manejado:", err.message);
  return false;
});
