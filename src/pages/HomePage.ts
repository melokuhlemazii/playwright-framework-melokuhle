import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class HomePage extends BasePage {
    get verifyHomePageHeading(): Locator {
        return this.page.getByRole('heading', { name: /Welcome\s*back/i }); //regex for case insensitive match and to ignore extra spaces
    }

    async verifyHomePageIsDisplayed(){
        await this.basePageVerifyElementIsVisible(this.verifyHomePageHeading);
    }

    async navigateToInstructorPanel(){
        await this.basePageClickElement(this.page.locator('xpath=//button//span[text()="Menu"]'));
        await this.basePageClickElement(this.page.locator('xpath=//a[contains(.,"Instructor Panel")]'));
    }
}



