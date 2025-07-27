import { Page, Locator } from '@playwright/test';

export class EventsPage {
    readonly page: Page;
    readonly eventsList: Locator;
    readonly addEventButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.eventsList = page.locator('.events-list');
        this.addEventButton = page.getByRole('button', { name: 'Add Event' });
    }

    async goto() {
        await this.page.goto('/events.html');
    }

    async addEvent() {
        await this.addEventButton.click();
    }
}
