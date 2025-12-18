import { Page, expect } from '@playwright/test';
import { HomePageLocators } from './home_page_locators';
import { RegistrationPageLocators } from '../registration-login/registration_login_locators';
import BasePage from '../../base/base-page';

export default class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigate(): Promise<void> {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/Automation Exercise/i);
    }

    async scrollToSubscription(): Promise<void> {
        const subscription = this.page.locator(
            HomePageLocators.subscriptionHeader
        );

        await subscription.scrollIntoViewIfNeeded();
        await expect(subscription).toBeVisible();
    }

    async clickScrollUp(): Promise<void> {
        await this.page.locator(HomePageLocators.scrollUpButton).click();
    }

    async clickOnDeleteButton(): Promise<void> {
        const deleteAccountButton = this.page.locator(
            HomePageLocators.menuItem('Delete Account')
        );

        await this.clickOnElement(deleteAccountButton);
    }

    async clickOnContinueButton(): Promise<void> {
        await this.clickOnElement(HomePageLocators.continueButton);
    }

    async deleteAccountAndValidateAccountDeletedTextIsVisible(){
        await this.clickOnDeleteButton();
        await this.validateElementIsVisible(RegistrationPageLocators.accountDeletedTextSelector)
    }

    async verifyHomePageTextIsVisible(): Promise<void> {
        const homeText = this.page
            .locator(HomePageLocators.homePageText)
            .first();

        await expect(homeText).toBeVisible();
    }
}