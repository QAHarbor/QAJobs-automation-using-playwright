import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Successfully Register with valid credentials', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexagone-78','tecn12@yopmail.com','01935698985','98765432','98765432');

const errorMessage = page.locator('id =_recruiter-company-name__error');
const errorCompnayName = await errorMessage.textContent();
console.log('Error Message:', errorCompnayName);

await page.pause();

})