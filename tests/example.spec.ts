import { expect } from '@playwright/test';
import { test } from './fixtures';

test('Smoke test: app loads and shows expected title', async ({ homePage }) => {
  await homePage.goto();
  await expect(homePage.heading).toBeVisible();
  await expect(homePage.heading).toHaveText('Welcome to EventBugAI');
});

test('User registration', async ({ registerPage }) => {
  const uniqueId = 'abc' + Math.random().toString(36).substring(2, 10);
  await registerPage.goto();
  await registerPage.register(uniqueId, 'Test User', 'TestPassword1');
  await expect(registerPage.successMessage).toBeVisible();
});
