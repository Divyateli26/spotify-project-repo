// pages/CartPage.js
import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator('button[name="add"], button:has-text("Add to cart")');
    this.cartIcon = page.locator('a[href*="/cart"]');
    this.cartBadge = page.locator('.cart-count, .icon-cart-count');
    this.cartItemTitle = page.locator('.cart-item__name, .cart__product-title');
  }

  async addCurrentProductToCart() {
    await this.addToCartBtn.first().click();
  }

  async openCart() {
    await this.cartIcon.first().click();
  }

  async verifyCartBadgeCount(expectedCount) {
    await expect(this.cartBadge).toHaveText(String(expectedCount));
  }

  async verifyProductInCart(productName) {
    await expect(this.cartItemTitle.filter({ hasText: productName })).toBeVisible();
  }
}