import {expect, test} from '../src/fixtures/CustomFixtures';
import { validUsers } from '../src/data/Testdata';

test.describe('Instructor Panel Functionality', () => {
    test('Navigate to Instructor Panel from Home Page', async ({ loginPage, homePage }) => {
        await loginPage.basePageGoToUrl('https://ndosisimplifiedautomation.vercel.app/');
        await loginPage.navigateToLoginPage();
    });
});



