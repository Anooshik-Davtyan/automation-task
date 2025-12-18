import { test } from '@playwright/test';
import SearchSection from "../pages/search/search_helpers";
import HomePage from "../pages/home_page/home_page_helpers";

test.describe('Search product Flow', () => {

    test.beforeEach(async ({ page }) => {
       const homePage = new HomePage(page);
       await homePage.navigate();
    });

    test('Search product functionality', async ({ page }) => {
        const search = new SearchSection(page);

        await search.clickOnProductButton();
        await search.validateUrl('/products');
        await search.searchProduct('jeans');
        await search.validateSearchProductsTitleIsVisible()
        await search.validateAllSearchResultsAreVisible();
    });
});