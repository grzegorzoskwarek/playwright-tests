import { test, expect } from '@playwright/test';

test('Smoke test: app loads and shows expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("EventBugAI - Home");
});
