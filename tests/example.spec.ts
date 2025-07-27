import { test, expect } from '@playwright/test';
import { RegisterPage } from './pages/RegisterPage';

test('Smoke test: app loads and shows expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("EventBugAI - Home");
});

test('User registration', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const uniqueId = 'user' + Math.random().toString(36).substring(2, 10);
  await registerPage.goto();
  await registerPage.register(uniqueId, 'Test User', 'TestPassword1');
  await expect(registerPage.successMessage).toBeVisible();
});
