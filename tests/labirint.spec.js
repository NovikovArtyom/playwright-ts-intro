const { test, expect } = require("@playwright/test");
const {MainPage} = require('../pages/mainPage');
const {ResultPage} = require('../pages/resultPage');
const {CartPage} = require('../pages/cartPage');

test("Поиск по сайту", async ({ page }) => {
  const mainPage = new MainPage(page);
  const resultPage = new ResultPage(page)
  const cartPage = new CartPage(page)

  await mainPage.openPage();
  await mainPage.searchFor("Javascript");

  const priceToBe = await resultPage.getPriceForItem(0);
  await resultPage.addItemToCart(0)
  
  await cartPage.openPage();
  await cartPage.checkTotalPrice(priceToBe)
});

test("Поиск по сайту (пустая выдача)", async ({ page }) => {
  const mainPage = new MainPage(page);
  const resultPage = new ResultPage(page)
  const cartPage = new CartPage(page)

  await mainPage.openPage();
  await mainPage.searchFor("Эйяфьядлайёкюдль");

  await resultPage.checkEmptySearchResultIsPresent()
  
  await cartPage.openPage();
  await cartPage.checkEmptyCartMessageIsPresent()
});


