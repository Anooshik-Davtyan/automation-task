import {expect, Page} from '@playwright/test';
import BasePage from "../../base/base-page";
import {SearchLocators} from "./search_locators";
import {HomePageLocators} from "../home_page/home_page_locators";

export default class SearchSection extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    async clickOnProductButton(){
        await this.clickOnElement(HomePageLocators.menuItem('Product'));
    }

    async clickOnSearchButton(){
        await this.clickOnElement(SearchLocators.searchButton);
    }

    async searchProduct(productName: string){
        await this.fillInputField(SearchLocators.searchInputField,productName);
        await this.clickOnSearchButton();
    }

    async validateAllSearchResultsAreVisible(){
        const products = this.page.locator(SearchLocators.singleProductLocator);
        const count = await products.count();

        for (let i = 0; i < count; i++) {
            await expect(products.nth(i)).toBeVisible();
        }
    }

    async validateSearchProductsTitleIsVisible(){
        await this.validateElementIsVisible(
            SearchLocators.searchedProductTextLocator
        );

        const text = await this.page.textContent(
            SearchLocators.searchedProductTextLocator
        );

        expect(text ?? '').toContain('Searched Products');
    }
}
