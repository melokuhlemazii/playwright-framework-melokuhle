import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class HomePage extends BasePage {
    get verifyHomePageHeading(): Locator {
        return this.page.locator("xpath=//span[normalize-space()='Welcome']");
    }

    async verifyHomePageIsDisplayed(){
        await this.basePageVerifyElementIsVisible(this.verifyHomePageHeading);
    }

    async navigateToInstructorPanel(){
        await this.basePageClickElement(this.page.locator('xpath=//button//span[text()="Menu"]'));
        await this.basePageClickElement(this.page.locator('xpath=//span[contains(.,"Instructor Panel")]').first());
    }

    async navigateToUserProfile(){
        await this.basePageClickElement(this.page.locator('xpath=//button//span[text()="Menu"]'));
        await this.basePageClickElement(this.page.locator('xpath=//span[contains(.,"My Profile")]').first());
    }

}



