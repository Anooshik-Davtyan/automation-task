import { test } from '@playwright/test';
import HomePage from '../pages/home_page/home_page_helpers';
import PlaceOrder from '../pages/place_order/place_order_helpers';
import RegistrationAndLoginPage from '../pages/registration-login/registration_login_helpers';
import { Constants } from '../utils/constants';

test.describe('Place Order - Login Before Checkout', () => {
    const userEmail = Constants.randomEmail();
    const userPassword = Constants.randomString();

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        const authPage = new RegistrationAndLoginPage(page);

        await homePage.navigate();

        await authPage.registerNewUser(
            Constants.USER.FIRST_NAME,
            userEmail,
            userPassword,
            Constants.USER.DOB.DAY,
            Constants.USER.DOB.MONTH,
            Constants.USER.DOB.YEAR,
            Constants.randomFirstName(),
            Constants.randomLastName(),
            Constants.USER.COMPANY,
            Constants.USER.ADDRESS,
            Constants.USER.SECOND_ADDRESS,
            Constants.USER.COUNTRY,
            Constants.USER.STATE,
            Constants.USER.CITY,
            Constants.USER.ZIP,
            Constants.USER.MOBILE_NUMBER
        );
    });

    test('should place an order successfully when user logs in before checkout', async ({ page }) => {
        const homePage = new HomePage(page);
        const authPage = new RegistrationAndLoginPage(page);
        const placeOrderPage = new PlaceOrder(page);

        await authPage.clickOnSignupLoginButton();
        await authPage.loginUser(userEmail, userPassword);
        await authPage.validateLoggedUserName(Constants.USER.FIRST_NAME);

        await placeOrderPage.clickAddToCart();
        await placeOrderPage.clickViewCart();
        await placeOrderPage.validateUrl('/view_cart');

        await placeOrderPage.clickOnProceedToCheckoutButton();
        await placeOrderPage.validateDeliveryAddress({
            name: Constants.USER.FIRST_NAME,
            company: Constants.USER.COMPANY,
            address1: Constants.USER.ADDRESS,
            cityStateZip: `${Constants.USER.CITY} ${Constants.USER.STATE} ${Constants.USER.ZIP}`,
            country: Constants.USER.COUNTRY,
            phone: Constants.USER.MOBILE_NUMBER,
        });

        await placeOrderPage.addCommentAboutOrder(
            'Please deliver between 9am and 6pm'
        );
        await placeOrderPage.clickOnPlaceOrderButton();

        await placeOrderPage.enterPaymentDetailsAndSubmit(
            Constants.USER.CARD_INFO.CARD_NAME,
            Constants.USER.CARD_INFO.CARD_NUMBER,
            Constants.USER.CARD_INFO.CVC,
            Constants.USER.CARD_INFO.EXPIRATION_MONTH,
            Constants.USER.CARD_INFO.EXPIRATION_YEAR
        );

        await placeOrderPage.validatePayAndConfirmOrderSuccessMessageIsVisible();
        await placeOrderPage.validateConfirmedOrderMessageIsVisible();

        await homePage.deleteAccountAndValidateAccountDeletedTextIsVisible();
        await homePage.clickOnContinueButton();
    });
});
