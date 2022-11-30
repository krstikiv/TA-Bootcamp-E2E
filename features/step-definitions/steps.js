import { Given, When, Then } from '@wdio/cucumber-framework';

Given("I am on the Newegg home page", async () => {
    await browser.url("https://www.newegg.com/");
});

When("I can close the promo banner if it appears", async () => {
    const modal = await $('#modal-Website');
    try {
        if(await browser.waitUntil(() => modal.isClickable())) {

            const closeButton = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button');
            await closeButton.click(); 
        }

    } catch(error){
        console.log("Modal pop up not displayed.");
    }
});

When("I enter the word Windows in the search bar located top middle", async () => {
    const searchWord = "Windows";
    const searchBox = await $("input[type='search']");
    await searchBox.click();
    await searchBox.setValue(searchWord);
});

When("I click the search button", async () => {
    const searchButton = await $('button.ico.ico-search');
    await searchButton.click();
});

Then("I should see that at least one item appears", async () => {
    const $viewItems = await $('div.list-wrap');
    await browser.waitUntil(() => $viewItems.isDisplayed());
    await expect($viewItems).toBeDisplayed();
});

When("I click on Todays Best Deals link", async () => {   
    const todaysDeal = await $('#trendingBanner_720202');
    await todaysDeal.click();
});

When("I click on the Internet shop logo located top right corner", async () => {   
    const shoppingCartLogo = await $('a > i.ico.ico-shopping-cart.header2021-nav-icon');
    await shoppingCartLogo.click();
});

Then("I should see that the main page is opened", async () => {
    const getPageUrl = await browser.getUrl();
    await expect(getPageUrl).toBe("https://secure.newegg.com/shop/cart");
});
