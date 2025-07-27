import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly heading: Locator;
    readonly registerLink: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Welcome to EventBugAI', level: 1 });
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
