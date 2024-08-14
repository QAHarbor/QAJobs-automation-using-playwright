import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { FindJobPage } from '../../../PageObject/PageObject_Recruiter/FindJobs';

test('Login and Successfully Search using Deadline', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com', '12345678');

    const findjob = new FindJobPage(page);
    await findjob.DateSelection();
    
    await page.waitForTimeout(5000);
    await page.pause();
});