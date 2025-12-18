export const HomePageLocators = {
    subscriptionHeader: '//h2[contains(text(), "Subscription")]',
    scrollUpButton: '#scrollUp',
    homePageText: '//h2[contains(text(), "Full-Fledged practice website for Automation Engineers")]',
    continueButton: '[data-qa="continue-button"]',
    menuItem: (text: string) => `.shop-menu.pull-right li >> text=${text}`,
};
