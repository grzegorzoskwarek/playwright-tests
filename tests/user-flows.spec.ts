import { expect } from '@playwright/test';
import { test } from '../src/fixtures';

test('@user User registration', async ({ registerPage }) => {
    const uniqueId = 'user' + Date.now();
    await registerPage.goto();
    await registerPage.register(uniqueId, 'Test User', 'TestPassword1');
    await expect(registerPage.successMessage).toBeVisible();
});

test('@user User login: valid credentials allow access', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('testuser', 'TestPassword1');
    await expect(loginPage.loginHeading).toBeVisible();
});

test('@user Event creation: user can create a valid event', async ({ loginPage, eventsPage }) => {
    await loginPage.goto();
    await loginPage.login('testuser', 'TestPassword1');
    await expect(loginPage.loginHeading).toBeVisible();

    await eventsPage.gotoCreateEvent();
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
