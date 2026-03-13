import { test, expect } from '@playwright/test';
import path from 'path';

// Construimos la ruta absoluta al archivo index.html
const localFilePath = `file://${path.resolve(__dirname, '../index.html')}`;

test.describe('Portal de Transportes Monterrey', () => {
  
  test('La página carga correctamente y muestra el estado en línea', async ({ page }) => {
    // 1. Navegar al archivo local
    await page.goto(localFilePath);

    // 2. Validar que el título de la pestaña sea el correcto
    await expect(page).toHaveTitle(/Transportes Monterrey - Demo/);

    // 3. Validar el texto del estado del sistema
    const statusLocator = page.locator('#status');
    await expect(statusLocator).toHaveText('En línea');

    // 4. Validar que el color del estado sea verde (rgb(0, 128, 0))
    await expect(statusLocator).toHaveCSS('color', 'rgb(0, 128, 0)');
  });

});