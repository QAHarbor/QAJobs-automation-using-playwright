import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { MyProfilePageCan } from '../../../PageObject/PageObject_Candidate/MyProfile';


test('Login and Successfully Search using Job title',
    async ({ page }) => {
        const login = new LoginPageCan(page);
        await login.gotoCanLoginPage();
        await login.loginCred('em1@yopmail.com','12345678');

    const Upcontact = new MyProfilePageCan(page);
    await Upcontact.updateCanContact('01932573879','https://www.geeksforgeeks.org/installation-of-node-js-on-windows/');

    await page.waitForTimeout(5000);
    await page.pause();
});
