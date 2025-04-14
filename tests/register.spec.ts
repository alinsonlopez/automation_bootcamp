import { test, expect, request } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { before } from 'node:test';

const email: string = 'alinson.lopez@example.com';
const apiUrl: string = 'https://automation-portal-bootcamp.vercel.app/api/user';

test('Registering Passed', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.fillFirstName('Alinson');
    await registerPage.fillLastName('Lopez');
    await registerPage.fillEmail(email);
    await registerPage.fillPassword('password123');
    await registerPage.clickRegisterButton();
})

test.afterEach(async ({ page }) => {
    const requestContext = await request.newContext();
    const getResponse = await requestContext.get(`${apiUrl}?email=${email}`);
    const userData = await getResponse.json();
    console.log(userData);

    if (userData && userData.id) {
        console.log(`deleting user... ${userData.name}`);
        const deleteResponse = await requestContext.delete(`${apiUrl}/${userData.id}`, {
            headers: {
                'Authorization': 'Bearer mi-token-super-secreto'
            }
        });
        if (deleteResponse.ok()) {
            console.log('User deleted successfully');
        } else {
            console.error('Failed to delete user');
        }
    }
})