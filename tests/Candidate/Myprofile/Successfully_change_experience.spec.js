import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { MyProfilePageCan } from '../../../PageObject/PageObject_Candidate/MyProfile';


test('Login and Update experience',
    async ({ page }) => {
        const login = new LoginPageCan(page);
        await login.gotoCanLoginPage();
        await login.loginCred('em1@yopmail.com','12345678');

    const UpExp = new MyProfilePageCan(page);
    await UpExp. updateExp('3');

    await page.waitForTimeout(5000);
    await page.pause();
});
