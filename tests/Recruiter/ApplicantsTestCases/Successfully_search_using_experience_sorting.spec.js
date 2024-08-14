import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { WhoappliedPage } from '../../../PageObject/PageObject_Recruiter/WhoApplied';

test('Login and Successfully Search candidate using name', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com','12345678');

    const CanSearch3 = new WhoappliedPage(page);
    await CanSearch3.SearchUisngExp("2","5");
    
    await page.pause();

});
