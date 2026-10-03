import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
});

export default defineConfig({
  testDir,
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: true,
  reporter: 'html',
  timeout: 60 * 1000,
  retries: process.env.CI ? 1 : 0,

  use: {
    baseURL: 'https://sauce-demo.myshopify.com',
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
  ],
});