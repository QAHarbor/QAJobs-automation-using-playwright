import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { CanChangePassPage } from '../../../PageObject/PageObject_Candidate/CHangePassword';

test('Login and Successfully change password', async ({ page }) => {
    const login = new LoginPageCan(page);
    await login.gotoCanLoginPage();
    await login.loginCred('em1@yopmail.com','12345678');

    const PassChange = new CanChangePassPage(page);
    await PassChange.PassChange('12345678','12345678');
    

    const successMessageLocator = page.locator("(//div[@class='jet-form-builder-message jet-form-builder-message--success'][normalize-space()='You have successfully changed your password.'])[1]");
    
    const successMessage = await successMessageLocator.textContent();
    console.log('Success Message:', successMessage);
    await page.pause();

});

