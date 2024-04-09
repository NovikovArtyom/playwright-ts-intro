const { expect } = require("@playwright/test");

export class CartPage{

    constructor(page){
        this.page = page;
        this.totalPrice = page.locator(".b-dotted-im-e-val").last();
        this.emptyCartessage = page.locator("#basket-step1-default .g-alttext-small.g-alttext-grey.g-alttext-head").first();
    }
    async openPage(){
        await this.page.goto("https://www.labirint.ru/cart");
    }

    async checkTotalPrice(priceToBe){
        await expect(this.totalPrice).toHaveText(priceToBe);
    }

    async checkEmptyCartMessageIsPresent(){
        await expect(this.emptyCartessage).toHaveText("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?", {ignoreCase: true})
    }
}