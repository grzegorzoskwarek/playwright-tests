import { expect } from '@playwright/test';
import { test } from '../src/fixtures';

test.describe('Smoke tests', { tag: ['@public', '@smoke', '@home'] }, () => {
  test('App loads and shows expected title', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.heading).toHaveText('Welcome to EventBugAI');
  });
});
