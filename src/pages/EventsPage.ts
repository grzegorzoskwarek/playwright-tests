import { Page, Locator } from '@playwright/test';

export class EventsPage {
    readonly page: Page;
    readonly eventsList: Locator;
    readonly addEventButton: Locator;
    readonly titleInput: Locator;
    readonly descriptionInput: Locator;
    readonly dateInput: Locator;
    readonly timeInput: Locator;
    readonly locationInput: Locator;
    readonly categoriesInput: Locator;
    readonly onlineCheckbox: Locator;
    readonly createEventButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.eventsList = page.locator('.events-list');
        this.addEventButton = page.getByRole('button', { name: 'Add Event' });
        this.titleInput = page.getByRole('textbox', { name: 'Title* (3-50 chars)' });
        this.descriptionInput = page.getByRole('textbox', { name: 'Description* (10-200 chars)' });
        this.dateInput = page.getByRole('textbox', { name: 'Date*' });
        this.timeInput = page.getByRole('textbox', { name: 'Time*' });
        this.locationInput = page.getByRole('textbox', { name: 'Location* (3-50 chars)' });
        this.categoriesInput = page.getByRole('textbox', { name: 'Categories (max 3, comma-separated)' });
        this.onlineCheckbox = page.getByRole('checkbox', { name: 'This is an online event' });
        this.createEventButton = page.getByRole('button', { name: 'Create Event' });
    }

    async goto() {
        await this.page.goto('/events.html');
    }

    async gotoCreateEvent() {
        await this.page.goto('/create-event.html');
    }

    async createEvent({
        title,
        description,
        date,
        time,
        location,
        categories,
        online = false
    }: {
        title: string;
        description: string;
        date: string;
        time: string;
        location: string;
        categories: string;
        online?: boolean;
    }) {
        await this.titleInput.fill(title);
        await this.descriptionInput.fill(description);
        await this.dateInput.fill(date);
        await this.timeInput.fill(time);
        await this.locationInput.fill(location);
        await this.categoriesInput.fill(categories);
        if (online) {
            await this.onlineCheckbox.check();
        }
        await this.createEventButton.click();
    }

    async addEvent() {
        await this.addEventButton.click();
    }
}
