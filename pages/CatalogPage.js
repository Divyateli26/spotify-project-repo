import { expect } from '@playwright/test';

export class CatalogPage {
  constructor(page) {
    this.page = page;
    this.catalogTitle = page.locator('h1, .collection-hero__title, .main-page-title');
    this.productItems = page.locator('a[href*="/products/"], .grid__item');
  }

  async verifyCatalogUrl(expectedPath) {
    await expect(this.page).toHaveURL(new RegExp(expectedPath, 'i'));
  }

  async verifyCatalogHeading() {
    await expect(this.catalogTitle.first()).toBeVisible({ timeout: 10000 });
  }
}