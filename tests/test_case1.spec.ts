import { test } from '@playwright/test';
import { Constants } from '../utils/constants';
import HomePage from "../pages/home_page/home_page_helpers";
import RegistrationAndLoginPage from "../pages/registration-login/registration_login_helpers";

test.describe('User Registration Flow', () => {

    test('Should successfully register a new user and delete the account', async ({ page }) => {
        const registrationPage = new RegistrationAndLoginPage(page);
        const homePage = new HomePage(page);

        const randomEmail = Constants.randomEmail();
        const randomName = Constants.randomString();
        const randomFirstName = Constants.randomFirstName();
        const randomLastName = Constants.randomLastName();

        await homePage.navigate();

        await registrationPage.clickOnSignupLoginButton();
        await registrationPage.validateNewUserSignUpTextIsVisible();
        await registrationPage.enterName(randomName);
        await registrationPage.enterEmail(randomEmail);
        await registrationPage.clickOnSignUpButton();

        await registrationPage.validateEnterAccountInformationTextIsVisible();
        await registrationPage.fillRegistrationDetailsAndSubmit(
            randomName,
            Constants.USER.DOB.DAY,
            Constants.USER.DOB.MONTH,
            Constants.USER.DOB.YEAR,
            randomFirstName,
            randomLastName,
            Constants.USER.COMPANY,
            Constants.USER.ADDRESS,
            Constants.USER.SECOND_ADDRESS,
            Constants.USER.COUNTRY,
            Constants.USER.STATE,
            Constants.USER.CITY,
            Constants.USER.ZIP,
            Constants.USER.MOBILE_NUMBER
        );

        await registrationPage.validateAccountCreatedTextIsVisible();
        await registrationPage.clickOnContinueButton();
        await registrationPage.validateLoggedUserName(randomName);

        await homePage.deleteAccountAndValidateAccountDeletedTextIsVisible();
        await registrationPage.clickOnContinueButton();
    });
});