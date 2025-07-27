import { expect } from '@playwright/test';
import { test } from '../src/fixtures';

test('@public Smoke test: app loads and shows expected title', async ({ homePage }) => {
  await homePage.goto();
  await expect(homePage.heading).toHaveText('Welcome to EventBugAI');
});
