const { test, expect } = require('@playwright/test');

test('Nike', async ({ page }) => {

  // Go to https://www.nike.com/mx/
  await page.goto('https://www.nike.com/mx/');

  // Click text=Únete|Iniciar sesión >> button
  await page.locator('text=Únete|Iniciar sesión >> button').click();

  // Click [placeholder="Dirección de correo electrónico"]
  await page.locator('[placeholder="Dirección de correo electrónico"]').click();

  // Fill [placeholder="Dirección de correo electrónico"]
  await page.locator('[placeholder="Dirección de correo electrónico"]').fill('aaaa');

  // Click [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').click();

  // Fill [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').fill('aaaa');

  // Click input:has-text("INICIAR SESIÓN")
  await page.locator('input:has-text("INICIAR SESIÓN")').click();

})