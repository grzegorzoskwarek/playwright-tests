import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly identifierInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.identifierInput = page.getByRole('textbox', { name: 'Identifier:' });
        this.usernameInput = page.getByRole('textbox', { name: 'Username (display name):' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.successMessage = page.getByText('Registration successful! Redirecting to home page...');
    }

    async goto() {
        await this.page.goto('/register.html');
    }

    async register(identifier: string, username: string, password: string) {
        await this.identifierInput.fill(identifier);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.registerButton.click();
    }
}
