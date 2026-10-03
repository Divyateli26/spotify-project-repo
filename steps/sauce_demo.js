import { createBdd } from 'playwright-bdd';
import { SauceDemoPage } from '../pages/SauceDemoPage.js';

const { Given, When, Then } = createBdd();

Given('User Sauce Demo store homepage par navigate karta hai', async ({ page }) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.navigateToHome();
});

Then('Page title me {string} hona chahiye', async ({ page }, titleKeyword) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.verifyTitle(titleKeyword);
});

Then('Page URL me {string} hona chahiye', async ({ page }, urlKeyword) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.verifyUrlContains(urlKeyword);
});

When('Search icon par click karke search input me {string} type karta hu', async ({ page }, product) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.searchForProduct(product);
});

Then('Search results page display hona chahiye', async ({ page }) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.verifySearchResults();
});

Then('Products list visible honi chahiye', async ({ page }) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.verifyProductsVisible();
});

When('Header navigation link {string} par click karta hu', async ({ page }, linkName) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.clickNavigationLink(linkName);
});