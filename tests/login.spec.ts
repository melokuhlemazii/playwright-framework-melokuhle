import {expect, test} from '../src/fixtures/CustomFixtures';
import {validUsers} from '../src/data/Testdata';

test('Positive login - Admin', async ({loginPage, homePage, page}) => {
    await loginPage.basePageGoToUrl('https://ndosisimplifiedautomation.vercel.app/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(validUsers.classUsers.username, validUsers.classUsers.password);
    // soft assertion
    await expect.soft(page).toHaveURL(/dashboard123/); //failing the test on purpose to check the soft assertion
    await homePage.verifyHomePageIsDisplayed();
});



