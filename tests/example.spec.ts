import { expect } from '@playwright/test';
import { test } from '../src/fixtures';

test('Smoke test: app loads and shows expected title', async ({ homePage }) => {
  await homePage.goto();
  await expect(homePage.heading).toBeVisible();
  await expect(homePage.heading).toHaveText('Welcome to EventBugAI');
});

test('User registration', async ({ registerPage }) => {
  const uniqueId = 'user' + Date.now();
  await registerPage.goto();
  await registerPage.register(uniqueId, 'Test User', 'TestPassword1');
  await expect(registerPage.successMessage).toBeVisible();
});
