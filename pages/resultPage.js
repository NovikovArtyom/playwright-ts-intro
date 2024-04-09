const { expect } = require("@playwright/test");

export class ResultPage{

    constructor(page){
        this.page = page;
        this.cards = page.locator(".product-card")
        this.emptyResultMessage = page.locator("h1").first();
    }

    async getPriceForItem(index){
        const price = await this.cards.nth(index).locator(".product-card__price-current").textContent()
        return price.trim();
    }

    async addItemToCart(index){
        await this.cards.nth(index).locator(".buy-link").click();
    }

    async checkEmptySearchResultIsPresent(){
        await expect(this.emptyResultMessage).toHaveText("Мы ничего не нашли по вашему запросу! Что делать?")
    }
}
