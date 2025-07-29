import { expect } from '@playwright/test';
import { test } from '../src/fixtures';

test.describe('User flows', { tag: ['@user'] }, () => {
    test('User registration: should allow a new user to register with unique credentials and see a success message', { tag: ['@registration'] }, async ({ registerPage }) => {
        const uniqueId = 'user' + Date.now();
        await registerPage.goto();
        await registerPage.register(uniqueId, 'Test User', 'TestPassword1');
        await expect(registerPage.successMessage).toBeVisible();
    });

    test.describe('Event flows', { tag: ['@event'] }, () => {
        test('Event creation: user can create a valid event and see a success confirmation', { tag: ['@event-creation'] }, async ({ loginPage, eventsPage }) => {
            await loginPage.goto();
            await loginPage.login('testuser', 'TestPassword1');
            await expect(loginPage.loginHeading).toBeVisible();

            await eventsPage.gotoCreateEvent();
            await eventsPage.titleInput.waitFor({ state: 'visible', timeout: 5000 });
            await eventsPage.createEvent({
                title: 'Playwright Test Event',
                description: 'This is a test event created by Playwright.',
                date: '2025-12-31',
                time: '12:00',
                location: 'Test Location',
                categories: 'Testing',
                online: false
            });

            await expect(eventsPage.page.getByText('Event created successfully')).toBeVisible();
        });
    });
});
