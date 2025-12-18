import {expect, Page} from '@playwright/test';
import BasePage from "../../base/base-page";
import {PlaceOrderLocators} from "./place_order_locators";

export default class PlaceOrder extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    async clickAddToCart(): Promise<void> {
        const addToCart = this.page.locator(PlaceOrderLocators.addToCartButton).first();

        await addToCart.hover();
        await addToCart.waitFor({ state: 'visible' });
        await addToCart.click();
    }

    async clickViewCart(): Promise<void> {
        const viewCart = this.page.locator(PlaceOrderLocators.viewCartButton);

        await this.clickOnElement(viewCart);
    }

    async clickOnProceedToCheckoutButton(){
        await this.clickOnElement(PlaceOrderLocators.placeOrderButton);
    }

    async validateDeliveryAddress(expectedDetails: {
        name: string,
        company?: string,
        address1?: string,
        address2?: string,
        cityStateZip: string,
        country: string,
        phone: string
    }) {
        const addressBlock = this.page.locator(PlaceOrderLocators.deliveryAddressLocator);

        const name = await addressBlock.locator(PlaceOrderLocators. addressDetailsFirstName).textContent();
        expect(name?.trim()).toContain(name);

        if (expectedDetails.company) {
            const company = await addressBlock.locator(PlaceOrderLocators.deliveryAddressDetails).nth(0).textContent();
            expect(company?.trim()).toBe(expectedDetails.company);
        }

        if (expectedDetails.address1) {
            const address1 = await addressBlock.locator(PlaceOrderLocators.deliveryAddressDetails).nth(1).textContent();
            expect(address1?.trim()).toBe(expectedDetails.address1);
        }

        if (expectedDetails.address2) {
            const address2 = await addressBlock.locator(PlaceOrderLocators.deliveryAddressDetails).nth(2).textContent();
            expect(address2?.trim()).toBe(expectedDetails.address2);
        }

        const cityStateZip = await addressBlock
            .locator(PlaceOrderLocators.deliveryAddressDetailsStateZip)
            .textContent();

        const normalizedCityStateZip = cityStateZip?.replace(/\s+/g, ' ').trim();

        expect(normalizedCityStateZip).toBe(expectedDetails.cityStateZip);

        const country = await addressBlock.locator(PlaceOrderLocators.deliveryAddressDetailsCountry).textContent();
        expect(country?.trim()).toBe(expectedDetails.country);

        const phone = await addressBlock.locator(PlaceOrderLocators.deliveryAddressDetailsPhone).textContent();
        expect(phone?.trim()).toBe(expectedDetails.phone);
    }

    async addCommentAboutOrder(comment: string){
        await this.fillInputField(PlaceOrderLocators.commentAboutOrderTextarea,comment);
    }

    async clickOnPlaceOrderButton(){
        await this.clickOnElement(PlaceOrderLocators.placeOrderButton);
    }

    async enterNameOnCard(name: string){
        await this.fillInputField(PlaceOrderLocators.nameOnCardInputField, name);
    }

    async enterCardNumber(cardNumber: number){
        await this.fillInputField(PlaceOrderLocators.cardNumberInputField, cardNumber);
    }

    async enterCVC(CVC: number){
        await this.fillInputField(PlaceOrderLocators.cvcInputField, CVC);
    }

    async enterExpirationMonth(month: number){
        await this.fillInputField(PlaceOrderLocators.expirationMonthInputField, month);
    }

    async enterExpirationYear(year: number){
        await this.fillInputField(PlaceOrderLocators.expirationYearInputField, year);
    }

    async clickOnPayAndConfirmOrder(){
        await this.clickOnElement(PlaceOrderLocators.payAndConfirmOrderButton);
    }

    async enterPaymentDetailsAndSubmit(name:string, cardNumber: number, CVC: number, month:number, year: number){
        await this.enterNameOnCard(name);
        await this.enterCardNumber(cardNumber);
        await this.enterCVC(CVC);
        await this.enterExpirationMonth(month);
        await this.enterExpirationYear(year);
        await this.clickOnPayAndConfirmOrder();
    }

    async validatePayAndConfirmOrderSuccessMessageIsVisible() {
        await this.validateElementIsVisible(PlaceOrderLocators.payAndConfirmOrderSuccessMessageLocator);
    }

    async validateConfirmedOrderMessageIsVisible() {
        await this.validateElementIsVisible(PlaceOrderLocators.confirmedOrderMessageLocator);
    }
}
