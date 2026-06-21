import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class InstructorPanelPage extends BasePage {
    get verifyInstructorPanelHeading(): Locator {
        return this.page.getByRole('heading', { name: /Instructor\s*Dashboard/i }); //regex for case insensitive match and to ignore extra spaces
    }

    async verifyInstructorPanelIsDisplayed(){
        await this.basePageVerifyElementIsVisible(this.verifyInstructorPanelHeading);
    }
}

                                                            
                            
                    
                                                                                    