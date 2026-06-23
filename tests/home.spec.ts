import {expect, test} from '../src/fixtures/CustomFixtures';
import { validUsers } from '../src/data/Testdata';

test.describe('Instructor Panel Functionality', () => {
    test('Navigate to Instructor Panel from Home Page', async ({ loginPage, homePage }) => {
        //await loginPage.basePageGoToUrl('https://ndosisimplifiedautomation.vercel.app/');
        //await loginPage.navigateToLoginPage();
        //await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await loginPage.performFullLogin(validUsers.admin.username, validUsers.admin.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToInstructorPanel();
    });

    test.only('Update User Profile', async ({ loginPage, homePage, userProfilePage}) => {
        //await loginPage.basePageGoToUrl('https://ndosisimplifiedautomation.vercel.app/');
        //await loginPage.navigateToLoginPage();
        //await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
        await loginPage.performFullLogin(validUsers.classUsers.username, validUsers.classUsers.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToUserProfile();
        await userProfilePage.editUserProfile('validUsers.admin.gitUsername');
        await userProfilePage.verifyUserProfileUpdated('validUsers.admin.gitUsername');
    });
});



