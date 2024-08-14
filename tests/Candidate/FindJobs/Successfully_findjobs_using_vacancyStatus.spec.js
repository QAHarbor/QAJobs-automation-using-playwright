import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { CanFindJobPage } from '../../../PageObject/PageObject_Candidate/FindJobPage';

test('Login and Successfully Search using Job title', async ({ page }) => {
    const login = new LoginPageCan(page);
    await login.gotoCanLoginPage();
    await login.loginCred('em1@yopmail.com','12345678');

    const findjob = new CanFindJobPage(page);
    await findjob.VacancyStatus();
    
    await page.waitForTimeout(5000);
    await page.pause();
});