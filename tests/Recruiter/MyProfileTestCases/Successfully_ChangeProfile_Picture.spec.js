import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { MyprofilePage } from '../../../PageObject/PageObject_Recruiter/MyProfile';

test('Login and Successfully change logo', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com', '12345678');
    
    // Verify successful login by checking for a known element post-login
    

    const logoChange = new MyprofilePage(page);
    await logoChange.updateLogo('C:\\Users\\Dell\\Downloads\\img1.jpg'); // Ensure the path is correct for the environment

    // Add a verification step to confirm the logo change
    await expect(page.locator('img[src*="img1.jpg"]')).toBeVisible(); // Adjust to actual element verification
});
