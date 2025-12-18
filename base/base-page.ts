import {Page, expect, Locator} from '@playwright/test';

export default class BasePage {
    constructor(public page: Page) {}

    async clickOnElement(element: string | Locator) {
        if (typeof element === 'string') {
            await this.page.click(element);
        } else {
            await element.click();
        }
    }

    async fillInputField(selector: string, text: string | number) {
        await this.page.locator(selector).fill(text.toString());
    }

    async validateUrl(expectedPattern: any) {
        await expect(this.page).toHaveURL(expectedPattern);
    }

    async validateElementIsVisible(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isVisible();
    }

    async checkCheckbox(selector: string) {
        const checkbox = this.page.locator(selector);

        if (!(await checkbox.isChecked())) {
            await checkbox.check();
        }
    }
}
