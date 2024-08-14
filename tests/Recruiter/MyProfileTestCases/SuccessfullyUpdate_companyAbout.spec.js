import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { MyprofilePage } from '../../../PageObject/PageObject_Recruiter/MyProfile';

test('Login and Successfully update Company About', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com', '12345678');

    const myProfileAbout = new MyprofilePage(page);
    await myProfileAbout.updateCompanyAbout
    ("TechWave Solutions is a leading IT services and solutions provider, specializing in delivering innovative technology solutions to businesses of all sizes. Established in 2010, TechWave Solutions has a proven track record of helping organizations leverage the power of technology to achieve their business objectives.")
});