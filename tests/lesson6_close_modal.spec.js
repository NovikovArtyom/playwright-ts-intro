const { test, expect } = require('@playwright/test');

test('close modal', async ({ page }) => {
  await page.goto('https://www.litres.ru/');
      
  await page.pause()
  await page.locator("#modal use").first().click();
});

