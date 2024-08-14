import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Successfully Register with valid credentials', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexagone-25','tecno12@yopmail','01935698985','98765432','98765432');

const errorMessage = page.locator('id =_recruiter-company-name__error');
const errormail = await errorMessage.textContent();
console.log('Error Message:', errormail);

await page.pause();
})