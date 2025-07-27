import { test, expect } from '@playwright/test';

test('Smoke test: app loads and shows expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("EventBugAI - Home");
});

test('User registration', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Identifier:' }).fill('testuser123');
  await page.getByRole('textbox', { name: 'Username (display name):' }).fill('Test User');
  await page.getByRole('textbox', { name: 'Password:' }).fill('TestPassword1');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Registration successful! Redirecting to home page...')).toBeVisible();
});
