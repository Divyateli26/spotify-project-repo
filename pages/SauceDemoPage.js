import { expect } from '@playwright/test';

export class SauceDemoPage {
  constructor(page) {
    this.page = page;
    this.searchIcon = page.locator('summary.header__icon--search, .header__search, button[aria-label*="Search"]');
    this.searchInput = page.locator('input[type="search"], #Search-In-Modal, input[name="q"]');
    this.productCards = page.locator('main a[href*="/products/"], #product-grid a[href*="/products/"], .card-wrapper a[href*="/products/"], a[href*="/products/"]');
  }

  async navigateToHome() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async verifyTitle(expectedKeyword) {
    await expect(this.page).toHaveTitle(new RegExp(expectedKeyword, 'i'));
  }

  async verifyUrl(expectedKeyword) {
    await this.verifyUrlContains(expectedKeyword);
  }

  async verifyUrlContains(expectedKeyword) {
    await expect(this.page).toHaveURL(new RegExp(expectedKeyword, 'i'));
  }

  async searchForProduct(product) {
    await this.searchProduct(product);
  }

  async searchProduct(productName) {
    if (await this.searchIcon.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await this.searchIcon.first().click();
    }
    await this.searchInput.first().waitFor({ state: 'visible', timeout: 10000 });
    await this.searchInput.first().fill(productName);
    await this.searchInput.first().press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifySearchResults() {
    await expect(this.page).toHaveURL(/search/i);
  }

  async verifyProductsVisible() {
    await expect(this.productCards.first()).toBeVisible({ timeout: 15000 });
  }

  async clickNavigationLink(linkName) {
    await this.page.locator(`header a:has-text("${linkName}"), nav a:has-text("${linkName}")`).first().click();
  }

  async selectProduct(productName) {
    const productLink = this.productCards.first();
    await productLink.waitFor({ state: 'visible', timeout: 15000 });
    
    const href = await productLink.getAttribute('href');
    if (href) {
      await this.page.goto(href, { waitUntil: 'domcontentloaded' });
    } else {
      await productLink.click();
      await this.page.waitForURL(/\/products\//i, { timeout: 15000 }).catch(() => {});
    }
  }
}