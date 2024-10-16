const { defineConfig } = require("cypress");
import dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  env: {
    baseUrl: process.env.URL, 
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
      return config;
    },
    testIsolation: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});

