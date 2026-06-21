import {Page, Locator, expect} from '@playwright/test';

export class BasePage {
    //protected readonly page: Page;

    constructor(public page: Page) {
        this.page = page;
    }

    //create reusable methods for common actions like navigating to a URL, clicking an element, 
    // entering text, and verifying elements
    async basePageGoToUrl(url: string) {
        await this.page.goto(url);
    }

    //click an element
    async basePageClickElement(element: Locator) {
        await element.click();
    }

    //enter text into an input field
    async basePageEnterText(locator: Locator, text: string) {
        await locator.clear();
        await locator.fill(text);
    }

    //get the text value of an element
    async basePageGetTextValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    //verify that an element is visible on the page
    async basePageVerifyElementIsVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }
}



