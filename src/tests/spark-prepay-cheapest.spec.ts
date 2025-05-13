import { test } from '@playwright/test';
import { SparkPrepayPage } from '../pom/SparkPrepayPage';

test('Buy cheapest Spark NZ pre-pay mobile plan (stop at payment)', async ({ page }) => {
  const sparkPrepay = new SparkPrepayPage(page);

  // Go to Spark NZ prepay plans page
  await sparkPrepay.goto();

  // Wait for the prepaid plans to load
  await sparkPrepay.waitForPlans();

  // Find and select the cheapest plan (should be $16.00)
  await sparkPrepay.selectCheapestPlan();

  // Add to cart
  await sparkPrepay.addToCart();

  // At this point, an hCaptcha challenge appears and blocks automation
  // Manual intervention is required to solve the captcha and continue checkout
  // You can uncomment the line below to pause and solve the captcha manually in headed mode
  // await page.pause();

  test.info().annotations.push({ type: 'info', description: 'hCaptcha blocks automation at checkout. Please solve manually to continue.' });

  // Optionally, you can add an assertion to check for the presence of the captcha iframe
  await sparkPrepay.expectCaptcha();

  // The test stops here as payment cannot be automated due to captcha
});
