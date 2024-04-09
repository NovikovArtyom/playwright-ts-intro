const { test, expect } = require('@playwright/test');

test('url and title', async ({ page }) => {
  await page.goto('http://inzhenerka.tech/');
      
  // >>>>> дополнить код здесь
  await expect(page).toHaveTitle("ИнженеркаТех - курсы для инженеров")
  await expect(page).toHaveURL("https://inzhenerka.tech/")
  // <<<<<
    
});
