import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Register with invalid Phone Number', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexago','tulp@yopmail.com','0193mnncbjhdc ','98765432','98765432');

const expectedMessage = 'Registration failed';
const messageLocator = page.locator('.jet-form-builder-message.jet-form-builder-message--success');
const actualMessage = await messageLocator.textContent();

console.log('Actual Message:', actualMessage);
console.log('Expected Message:', expectedMessage);

if (actualMessage.trim() !== expectedMessage) {
    console.error('There is an issue with phone number field');
  } 
  else {
    console.log('The actual message matches the expected message.');
  }
await page.pause();

})