import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { ChangePassPage } from '../../../PageObject/PageObject_Recruiter/ChangePassword';

test('Login and try to change password using short passoword', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com','12345678');

    const PassChange = new ChangePassPage(page);
    await PassChange.PassChange('1234','');
    

    await page.waitForTimeout(2000);
    // Close the page
    await page.close();

});
