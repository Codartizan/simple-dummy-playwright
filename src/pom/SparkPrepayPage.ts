import { Page, Locator, FrameLocator, expect } from '@playwright/test';

export class SparkPrepayPage {
  readonly page: Page;
  readonly prepaidTab: Locator;
  readonly mobilePlansHeading: Locator;
  readonly cheapestPlanHeading: Locator;
  readonly selectPackButton: Locator;
  readonly addToCartButton: Locator;
  readonly captchaFrame: FrameLocator;

  constructor(page: Page) {
    this.page = page;
    this.prepaidTab = page.getByRole('tab', { name: 'Prepaid', selected: true });
    this.mobilePlansHeading = page.getByRole('heading', { name: /Mobile plans/i });
    this.cheapestPlanHeading = page.getByRole('heading', { name: '$16.00' });
    this.selectPackButton = page.getByRole('button', { name: 'Select pack' }).first();
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.captchaFrame = page.frameLocator('iframe[src*="hcaptcha.com"]');
  }

  async goto() {
    await this.page.goto('https://www.spark.co.nz/shop/mobile-plans/prepaid/', { waitUntil: 'domcontentloaded' });
  }

  async waitForPlans() {
    await expect(this.prepaidTab).toBeVisible();
    await expect(this.mobilePlansHeading).toBeVisible();
  }

  async selectCheapestPlan() {
    await expect(this.cheapestPlanHeading).toBeVisible();
    await this.selectPackButton.click();
  }

  async addToCart() {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
  }

  async expectCaptcha() {
    await expect(this.captchaFrame).toBeVisible();
  }
}
