import { createBdd } from 'playwright-bdd';
import { SauceDemoPage } from '../pages/SauceDemoPage';
import { CartPage } from '../pages/CartPage';

const { Given, When, Then } = createBdd();

Given('User is on the home page', async ({ page }) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.navigateToHome();
});

When('User searches for {string}', async ({ page }, productName) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.searchProduct(productName);
});

When('User clicks on the product {string}', async ({ page }, productName) => {
  const saucePage = new SauceDemoPage(page);
  await saucePage.selectProduct(productName);
});

When('User clicks on the {string} button', async ({ page }, buttonName) => {
  const cartPage = new CartPage(page);
  if (buttonName === 'Add to Cart') {
    await cartPage.addCurrentProductToCart();
  }
});

Then('The cart badge should update to count {int}', async ({ page }, count) => {
  const cartPage = new CartPage(page);
  await cartPage.verifyCartBadgeCount(count);
});

Then('User opens the cart page', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.openCart();
});

Then('The product {string} should be visible in the cart', async ({ page }, productName) => {
  const cartPage = new CartPage(page);
  await cartPage.verifyProductInCart(productName);
});