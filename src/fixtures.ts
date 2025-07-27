import { test as base } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { EventsPage } from './pages/EventsPage';

export const test = base.extend<{
    homePage: HomePage;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    eventsPage: EventsPage;
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    eventsPage: async ({ page }, use) => {
        await use(new EventsPage(page));
    },
});
