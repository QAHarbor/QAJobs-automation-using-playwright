import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Register with empty confirm password field', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexagone-78','te009@yopmail.com','01935698985','98765432','');

const errorMessage = page.locator('id=conf-pass__error');
const errorConfpass = await errorMessage.textContent();
console.log('Failed to login', errorConfpass);

await page.pause();
})