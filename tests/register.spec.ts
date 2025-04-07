import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';


test('Registering Passed', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.fillFirstName('Alinson');
    await registerPage.fillLastName('Lopez');
    await registerPage.fillEmail('alinson.lopez@example.com');
    await registerPage.fillPassword('password123');
    await registerPage.clickRegisterButton();
})