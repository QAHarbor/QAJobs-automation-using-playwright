import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { ChangePassPage } from '../../../PageObject/PageObject_Recruiter/ChangePassword';

test('Login and Successfully change password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com','12345678');

    const PassChange = new ChangePassPage(page);
    await PassChange.PassChange('12345678','12345678');
    

    const successMessageLocator = page.locator("(//div[@class='jet-form-builder-message jet-form-builder-message--success'][normalize-space()='You have successfully changed your password.'])[1]");
    
    const successMessage = await successMessageLocator.textContent();
    console.log('Success Message:', successMessage);
    await page.pause();

});

