const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');

const { Given, Then } = createBdd();

Given('User catalog page par navigate karta hai', async ({ page }) => {
    const baseUrl = process.env.BASE_URL || 'https://sauce-demo.myshopify.com';
    await page.goto(`${baseUrl}/collections/all`);
});

Then('Catalog page ka heading {string} hona chahiye', async ({ page }, expectedHeading) => {
    // Header logo (#logo) ko bypass karke main section ka heading locate karein
    const heading = page.locator('main h1, .main-content h1, h1:not(#logo), .section-header__title, .collection-hero__title').first();
    await expect(heading).toContainText(expectedHeading, { ignoreCase: true });
});