const { test, expect } = require("@playwright/test");

test("Мок запроса", async ({ page }) => {
  page.on('websocket', ws => {
    console.log(`WebSocket opened: ${ws.url()}>`);
    ws.on('framesent', event => console.log(event.payload));
    ws.on('framereceived', event => console.log(event.payload));
    ws.on('close', () => console.log('WebSocket closed'));
  });


  await page.goto("https://www.binance.com/en/markets/overview")

    
    await page.pause();
});
