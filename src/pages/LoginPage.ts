import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly identifierInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly loginHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.identifierInput = page.getByRole('textbox', { name: 'Identifier:' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid credentials');
        this.loginHeading = page.getByRole('heading', { name: 'EventBugAI Login' });
    }

    async goto() {
        await this.page.goto('/login.html');
    }

    async login(identifier: string, password: string) {
        await this.identifierInput.fill(identifier);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async isLoggedIn() {
        return await this.loginHeading.isVisible();
    }
}
