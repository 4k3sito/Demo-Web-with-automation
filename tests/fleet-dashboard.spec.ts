import { test, expect } from '@playwright/test';
import { DashboardPage } from '../page-objects/DashboardPage';

test.describe('Fleet Management Dashboard E2E', () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.goto();
  });

  test('System status should display as online', async () => {
    await dashboardPage.verifySystemOnline();
  });

  test('Dashboard should load correctly', async () => {
    await expect(dashboardPage.pageTitle).toBeVisible();
  });
});