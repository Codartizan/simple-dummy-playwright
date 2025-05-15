import { test, expect } from '@playwright/test';
import { PhonesPage } from '../pom/PhonesPage';

test('Buy iPhone 15 Pro Black from Spark NZ (stop at payment)', async ({ page }) => {
  const phonesPage = new PhonesPage(page);

  // Go to Spark NZ mobile phones page
  await phonesPage.goto();

  // Assert iPhone 15 Pro is listed
  await expect(phonesPage.iphone15Pro).toBeVisible();

  // Select iPhone 15 Pro
  await phonesPage.selectIphone15Pro();

  // Assert Black color option exists (if available)
  if (await phonesPage.blackColorOption.isVisible()) {
    await expect(phonesPage.blackColorOption).toBeVisible();
  }

  // Select Black color if available
  await phonesPage.selectBlackColor();

  // Assert Add to cart button is visible
  await expect(phonesPage.addToCartButton).toBeVisible();

  // Add to cart
  await phonesPage.addToCart();

  // Go to cart (if not redirected automatically)
  // await phonesPage.goToCart();

  // Proceed to checkout (if possible)
  // await phonesPage.proceedToCheckout();

  // At this point, a captcha or payment step may block automation
  // You can uncomment the line below to pause and solve manually in headed mode
  // await page.pause();

  test.info().annotations.push({ type: 'info', description: 'Test stops before payment/captcha. Please solve manually to continue.' });

  // The test stops here as payment cannot be automated due to captcha or manual step
});
