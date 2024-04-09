const { test, expect } = require('@playwright/test');

test('endless stream', async ({ page }) => {
  test.setTimeout(12000);
  await page.goto('http://uitestingplayground.com/ajax');
      
  await page.locator("#not-existed-elemnt").click();
});
