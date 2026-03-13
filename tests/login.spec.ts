import { test, expect, chromium, Browser, Page } from '@playwright/test';

test('Debe iniciar sesión exitosamente con credenciales válidas', async ({ page }) => {
  // 1. Navegar a la URL
  await page.goto('https://practice.expandtesting.com/login');

  // 2. Interactuar con los elementos (usando localizadores recomendados)
  await page.getByLabel('username').fill('practice');
  await page.getByLabel('password').fill('SuperSecretPassword!');
  
  // 3. Ejecutar acción
  await page.getByRole('button', { name: /login/i }).click();

  // 4. Aserción: Verificar que el mensaje de éxito sea visible
  const flashMessage = page.locator('#flash');
  await expect(flashMessage).toBeVisible();
  await expect(flashMessage).toContainText('You logged into a secure area!');
});