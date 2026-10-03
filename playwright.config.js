import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config();

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
});

export default defineConfig({
  testDir,
  workers: process.env.CI ? 2 : undefined,
  fullyParallel: true,
  
  // Normal HTML aur Allure Report dono config
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  
  timeout: 60 * 1000,
  retries: process.env.CI ? 1 : 0,

  use: {
    baseURL: process.env.BASE_URL || 'https://sauce-demo.myshopify.com',
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    actionTimeout: 30000,
    navigationTimeout: 30000,
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});