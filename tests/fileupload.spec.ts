import { test, expect } from '@playwright/test';

test('Debe revelar y hacer clic en elementos ocultos mediante Hover', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/hovers');

  // Localizar la primera imagen de usuario
  const userFigure = page.locator('.figure').first();
  const caption = userFigure.locator('.figcaption');

  // Antes del hover, el texto debería estar oculto o no visible para el usuario
  await expect(caption).not.toBeVisible();

  // Realizar el Hover
  await userFigure.hover();

  // Validar que ahora el nombre del usuario es visible
  await expect(caption).toBeVisible();
  await expect(caption).toContainText('name: user1');

  // Hacer clic en el enlace que apareció
  await caption.getByRole('link', { name: 'View profile' }).click();
  
  // Verificar que la URL cambió correctamente
  await expect(page).toHaveURL(/.*\/users\/1/);
});