import { expect } from '@playwright/test';
import { test } from '../src/fixtures';

test.describe('Authentication and Security', () => {
    test('should block access to event creation for unauthenticated users', async ({ page }) => {
        await page.goto('/create-event.html');
        const url = await page.url();
        expect(url.includes('login') || url.includes('register')).toBeTruthy();
    });

    test('should allow registration with short password (current app behavior)', async ({ registerPage }) => {
        const uniqueId = 'user' + Date.now();
        await registerPage.goto();
        await registerPage.register(uniqueId, 'Test User', '123');
        await expect(registerPage.successMessage).toBeVisible();
    });

    test('should allow user to access event edit page for any event (current app behavior)', async ({ registerPage, loginPage, eventsPage, page }) => {
        const uniqueId = 'user' + Date.now();
        await registerPage.goto();
        await registerPage.register(uniqueId, 'User One', 'TestPassword1');
        await loginPage.goto();
        await loginPage.login(uniqueId, 'TestPassword1');
        await eventsPage.gotoCreateEvent();
        await eventsPage.titleInput.waitFor({ state: 'visible', timeout: 10000 });
        await eventsPage.createEvent({
            title: 'User1 Event',
            description: 'Test event description',
            date: '2025-12-31',
            time: '12:00',
            location: 'Test Location',
            categories: 'Testing',
            online: false
        });
        await expect(eventsPage.createEventButton).toBeEnabled();
        await page.goto('/edit-event.html?id=evt-007');
        const currentUrl = await page.url();
        expect(currentUrl).toContain('edit-event.html?id=evt-007');
    });
});
