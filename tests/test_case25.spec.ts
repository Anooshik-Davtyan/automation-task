import { test } from '@playwright/test';
import HomePage from "../pages/home_page/home_page_helpers";

test.describe('Scrolling functionality', () => {

    test('Verify Scroll Up using Arrow button and Scroll Down functionality', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.navigate();
        await homePage.scrollToSubscription();
        await homePage.clickScrollUp();
        await homePage.verifyHomePageTextIsVisible();
    });
});
