import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';


test('Registering Passed', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForTimeout(2000);

})