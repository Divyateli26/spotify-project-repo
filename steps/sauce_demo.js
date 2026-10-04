const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');

const { Given, When, Then } = createBdd();

Given('User store ke homepage par hai', async ({ page }) => {
    const baseUrl = process.env.BASE_URL || 'https://sauce-demo.myshopify.com';
    await page.goto(baseUrl);
});

Then('Homepage ka title {string} hona chahiye', async ({ page }, expectedTitle) => {
    await expect(page).toHaveTitle(new RegExp(expectedTitle, 'i'));
});

When('User search bar me {string} type karta hai', async ({ page }, searchTerm) => {
    const searchIcon = page.locator('header summary[aria-label*="Search"], header .header__icon--search, button[aria-label*="Search"], a[href*="/search"]').first();
    if (await searchIcon.isVisible()) {
        await searchIcon.click();
        await page.waitForTimeout(500);
    }

    const searchInput = page.locator('input[name="q"], input[type="search"], #Search-In-Modal, .search__input').first();
    await searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await searchInput.fill(searchTerm);
    await searchInput.press('Enter');
});

Then('Search result me {string} dikhna chahiye', async ({ page }, expectedProduct) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toContainText(expectedProduct, { ignoreCase: true });
});