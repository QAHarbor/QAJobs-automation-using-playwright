import {test,expect} from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';


test('Successfully login with valid credentials', async ({ page }) => {
    const login = new LoginPageCan(page);
await login.gotoCanLoginPage();
await login.loginCred('em1@yopmail.com','12345678');

//To display the error for mail address


await page.pause();
})