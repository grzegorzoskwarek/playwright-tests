import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;
    readonly registerLink: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('title');
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('/');
    }

    async goToRegister() {
        await this.registerLink.click();
    }

    async goToLogin() {
        await this.loginLink.click();
    }
}
