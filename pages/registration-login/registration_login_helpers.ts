import {expect, Page} from '@playwright/test';
import BasePage from "../../base/base-page";
import {RegistrationPageLocators} from "./registration_login_locators";
import {HomePageLocators} from "../home_page/home_page_locators";

export default class RegistrationAndLoginPage extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    async clickOnSignupLoginButton(){
        await this.clickOnElement(HomePageLocators.menuItem('Signup / Login'));
    }

    async validateNewUserSignUpTextIsVisible(){
        await this.validateElementIsVisible(RegistrationPageLocators.newUserSignUpTextXpathLocator);
    }

    async validateEnterAccountInformationTextIsVisible(){
        await this.validateElementIsVisible(RegistrationPageLocators.enterAccountInformationTextXpathLocator);
    }

    async validateAccountCreatedTextIsVisible(){
        await this.validateElementIsVisible(RegistrationPageLocators.accountCreatedText);
    }

    async enterLoginEmail(email: string){
        await this.fillInputField(RegistrationPageLocators.loginEmailInputField, email);
    }

    async enterLoginPassword(password: string){
        await this.fillInputField(RegistrationPageLocators.loginPasswordInputField, password);
    }

    async clickOnLoginButton(){
        await this.clickOnElement(RegistrationPageLocators.loginButton);
    }

    async loginUser(email: string, password: string){
        await this.enterLoginEmail(email);
        await this.enterLoginPassword(password);
        await this.clickOnLoginButton();
    }

    async enterName(name: string) {
        await this.fillInputField(RegistrationPageLocators.signUpNameInputField, name);
    }

    async enterEmail(email: string) {
        await this.fillInputField(RegistrationPageLocators.signUpEmailInputField, email);
    }

    async enterPassword(password: string) {
        await this.fillInputField(RegistrationPageLocators.passwordInputField, password);
    }

    async clickOnSignUpButton(){
        await this.clickOnElement(RegistrationPageLocators.signUpButton);
    }

    async enterFirstName(firstName: string) {
        await this.fillInputField(RegistrationPageLocators.firstNameInputField, firstName);
    }

    async enterLastName(lastName: string) {
        await this.fillInputField(RegistrationPageLocators.lastNameInputField, lastName);
    }

    async enterCompanyName(companyName: string){
        await this.fillInputField(RegistrationPageLocators.companyInputField, companyName);
    }

    async enterFirstAddress(firstAddress: string) {
        await this.fillInputField(RegistrationPageLocators.firstAddressInputField, firstAddress);
    }

    async enterSecondAddress(secondAddress: string) {
        await this.fillInputField(RegistrationPageLocators.secondAddressInputField, secondAddress);
    }

    async selectCountry(country: string) {
        await this.page.selectOption(RegistrationPageLocators.countryDropdown, country);
    }

    async enterState(state: string){
        await this.fillInputField(RegistrationPageLocators.stateInputField, state);
    }

    async enterCity(city: string){
        await this.fillInputField(RegistrationPageLocators.cityInputField, city);
    }

    async enterZipCode(zipCode: string) {
        await this.fillInputField(RegistrationPageLocators.zipCodeInputField, zipCode);
    }

    async enterMobileNumber(mobileNumber: string) {
        await this.fillInputField(RegistrationPageLocators.mobileNumberInputField, mobileNumber);
    }

    async selectCheckboxReceiveSpecialOffersFromOurPartners(){
        await this.checkCheckbox(RegistrationPageLocators.receiveSpecialOffersFromOurPartnersCheckbox);
    }

    async clickOnCreateAccountButton(){
        await this.clickOnElement(RegistrationPageLocators.createAccountButton);
    }

    async fillDate(day: string, month: string, year: string) {
        await this.page.selectOption(RegistrationPageLocators.daysDropdown, { label: day });
        await this.page.selectOption(RegistrationPageLocators.monthDropdown, { label: month });
        await this.page.selectOption(RegistrationPageLocators.yearDropdown, { label: year });
    }

    async fillRegistrationDetailsAndSubmit(password: string,day: string, month: string, year: string, firstName: string, lastName: string, companyName: string ,
                                  firstAddress: string , secondAddress: string , country: string, state: string, city: string,zip: string, mobileNumber: string) {
      await this.enterPassword(password);
      await this.fillDate(day, month, year);
      await this.selectCheckboxReceiveSpecialOffersFromOurPartners();
      await this.enterFirstName(firstName);
      await this.enterLastName(lastName);
      await this.enterCompanyName(companyName);
      await this.enterFirstAddress(firstAddress);
      await this.enterSecondAddress(secondAddress);
      await this.selectCountry(country);
      await this.enterState(state);
      await this.enterCity(city);
      await this.enterZipCode(zip);
      await this.enterMobileNumber(mobileNumber);
      await this.clickOnCreateAccountButton();
    }

    async clickOnContinueButton(){
        await this.clickOnElement(RegistrationPageLocators.continueButton);
    }

    async validateLoggedUserName(name: string) {
        const loggedUserLocator = this.page.locator(
            HomePageLocators.menuItem(`Logged in as ${name}`)
        );

        await expect(loggedUserLocator).toContainText(`Logged in as ${name}`);
    }

    async registerNewUser(
        name: string,
        email: string,
        password: string,
        day: string,
        month: string,
        year: string,
        firstName: string,
        lastName: string,
        companyName: string,
        firstAddress: string,
        secondAddress: string,
        country: string,
        state: string,
        city: string,
        zip: string,
        mobileNumber: string
    ) {
        await this.clickOnSignupLoginButton();
        await this.validateNewUserSignUpTextIsVisible();

        await this.enterName(name);
        await this.enterEmail(email);
        await this.clickOnSignUpButton();

        await this.validateEnterAccountInformationTextIsVisible();

        await this.fillRegistrationDetailsAndSubmit(
            password,
            day,
            month,
            year,
            firstName,
            lastName,
            companyName,
            firstAddress,
            secondAddress,
            country,
            state,
            city,
            zip,
            mobileNumber
        );

        await this.validateAccountCreatedTextIsVisible();
        await this.clickOnContinueButton();
        await this.validateLoggedUserName(name);
        await this.logout();
    }

    async logout(){
        await this.clickOnElement(HomePageLocators.menuItem('Logout'));
    }
}
