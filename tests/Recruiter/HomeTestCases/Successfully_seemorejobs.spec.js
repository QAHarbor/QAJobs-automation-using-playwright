import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { HomePage } from '../../../PageObject/PageObject_Recruiter/HomePage';

test('Login and Successfully Search using Job title', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com', '12345678');

    const home = new HomePage(page);
    
    await home.SeeMoreJobs();
    
    await page.waitForTimeout(2000);
    await page.close();
});