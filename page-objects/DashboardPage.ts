import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly activeUnitsCounter: Locator;
  readonly systemStatus: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', { name: 'Transportes Monterrey' });
    this.activeUnitsCounter = page.getByTestId('active-units');
    this.systemStatus = page.locator('#status');
  }

  async goto() {
    // Navigates to the base URL defined in playwright.config.ts
    await this.page.goto('/');
  }

  async verifySystemOnline() {
    await expect(this.systemStatus).toHaveText('En línea');
    await expect(this.systemStatus).toHaveCSS('color', 'rgb(0, 128, 0)');
  }
}