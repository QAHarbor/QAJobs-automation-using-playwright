import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Successfully Register with valid credentials', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexagone003','t0654@yopmail.com','01935698985','1234',' ');

const errorMessage = page.locator('id =pass__error');
const errorpass = await errorMessage.textContent();
console.log('Error Message:', errorpass);

await page.pause();

})