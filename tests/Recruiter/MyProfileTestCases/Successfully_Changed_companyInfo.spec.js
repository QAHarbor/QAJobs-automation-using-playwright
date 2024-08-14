import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { MyprofilePage } from '../../../PageObject/PageObject_Recruiter/MyProfile';

test('Login and Successfully update profile details', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com', '12345678');

    const myProfile = new MyprofilePage(page);
    await myProfile.updateProfileDetails('https://example.com', '123 Street');
});