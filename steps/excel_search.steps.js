const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { getExcelData } = require('../utils/excelReader');

const { Given, When, Then } = createBdd();

Given('User is on the store homepage', async ({ page }) => {
    const baseUrl = process.env.BASE_URL || 'https://sauce-demo.myshopify.com';
    await page.goto(baseUrl);
});

When('User searches products using Excel file {string}', async ({ page }, filePath) => {
    const testData = getExcelData(filePath, 'Products');
    const baseUrl = process.env.BASE_URL || 'https://sauce-demo.myshopify.com';

    for (const row of testData) {
        console.log(`Testing with SearchTerm: ${row.SearchTerm}`);

        // Har new search se pehle fresh home page par jayein
        await page.goto(baseUrl);

        // Search icon locate karke click karein
        const searchIcon = page.locator('header summary[aria-label*="Search"], header .header__icon--search, button[aria-label*="Search"], a[href*="/search"]').first();
        if (await searchIcon.isVisible()) {
            await searchIcon.click();
            await page.waitForTimeout(500);
        }

        // Search input field me term fill karein
        const searchInput = page.locator('input[name="q"], input[type="search"], #Search-In-Modal, .search__input').first();
        await searchInput.waitFor({ state: 'visible', timeout: 10000 });
        await searchInput.fill(row.SearchTerm);
        await searchInput.press('Enter');

        // Results page par ExpectedProduct match check karein
        await page.waitForLoadState('domcontentloaded');
        await expect(page.locator('body')).toContainText(row.ExpectedProduct);
    }
});

Then('All Excel search results should be validated successfully', async ({ page }) => {
    console.log('✅ Excel Data Driven Tests completed successfully!');
});