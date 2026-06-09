import {expect, test} from '../src/fixtures/CustomFixtures';
import {validUsers} from '../src/data/Testdata';

test('Positive login - Admin', async ({loginPage, homePage}) => {
    await loginPage.basePageGoToUrl('https://ndosisimplifiedautomation.vercel.app/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
});



