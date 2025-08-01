import { expect } from '@playwright/test';
import { test } from '../../src/fixtures';

test.describe('Setup: user registration and login', { tag: ['@setup'] }, () => {
    test('Register and login testuser', async ({ registerPage, loginPage }) => {
        await registerPage.goto();
        await registerPage.register('testuser', 'Test User', 'TestPassword1');

        await loginPage.goto();
        await loginPage.login('testuser', 'TestPassword1');
        await expect(loginPage.loginHeading).toBeVisible();
    });
});
