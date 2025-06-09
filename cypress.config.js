import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:3001",
    supportFile: "cypress/support/e2e.js"
  },
  component: {
    supportFile: "cypress/support/e2e.js"
  }
});