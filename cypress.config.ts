import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.ts', // Asegúrate de que la ruta a tu archivo de soporte esté correcta
    setupNodeEvents(on, config) {
      // Registra el plugin de Cucumber para el preprocesador
      addCucumberPreprocessorPlugin(on, config);

      return config;
    },

    baseUrl: 'https://demoqa.com',
  },
});

