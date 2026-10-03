import { expect } from '@playwright/test';

export class SauceDemoPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.searchIcon = page.locator('.site-header__search-toggle, header a[href*="search"], button[aria-label*="Search"]').first();
    this.searchInput = page.locator('input[name="q"], input[type="search"]').first();
    
    // Shopify stores ke sabhi product links aur cards ke liye flexible locator
    this.productGrid = page.locator('a[href*="/products/"], .product-card, .grid-view-item, [class*="product"]').first();
  }

  async navigateToHome() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async verifyTitle(expectedKeyword) {
    const title = await this.page.title();
    expect(title.toLowerCase()).toContain(expectedKeyword.toLowerCase());
  }

  async verifyUrlContains(keyword) {
    await expect(this.page).toHaveURL(new RegExp(keyword, 'i'));
  }

  async searchForProduct(productName) {
    if (await this.searchIcon.isVisible()) {
      await this.searchIcon.click();
    }
    await this.searchInput.waitFor({ state: 'visible', timeout: 15000 });
    await this.searchInput.fill(productName);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifySearchResults() {
    await expect(this.page).toHaveURL(/search/i);
  }

  async verifyProductsVisible() {
    await expect(this.productGrid).toBeVisible({ timeout: 15000 });
  }

  async clickNavigationLink(linkName) {
    const link = this.page.getByRole('link', { name: linkName, exact: false }).first();
    await link.click();
  }
}