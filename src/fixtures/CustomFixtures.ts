import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {InstructorPanelPage} from '../pages/InstructorPanelPage';
import {UserProfilePage} from '../pages/UserProfilePage';

type CustomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    instructorPanelPage: InstructorPanelPage;
    userProfilePage: UserProfilePage;
};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    instructorPanelPage: async ({page}, use) => {
        await use(new InstructorPanelPage(page));
    },
    userProfilePage: async ({page}, use) => {
        await use(new UserProfilePage(page));
    }
})

export {expect} from '@playwright/test';



