import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

    test('Navigate and Check Title', async ({ page }) => {
const register = new RegisterPage(page);
await register.gotoRegisterPage();
await expect(page).toHaveTitle('Recruiter Registration for automation – QAJobs');

})
test('Successfully Register with valid credentials', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexagone-56','tecno45@yopmail.com','0193569986','12345678','12345678');
await page.pause();

})