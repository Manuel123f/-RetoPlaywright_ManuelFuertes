import { test, expect } from '@playwright/test';
import { Login } from './POM/Login';
import { LoginPage } from './pageobjects/LoginPage';

test('InicioPage', async ({ page }) => {
  /*
  await page.locator('input[name=\'username\']').fill('Admin');
  await page.locator('input[name=\'password\']').fill('admin123');
  await page.keyboard.press('Enter');*/
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const login=new Login(page)
  login.fillUsername()
  login.fillPassword()
  login.clickOnLogin()
  await page.pause();
});
test('InicioPage2', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('input[name=\'username\']').fill('Admin');
  await page.locator('input[name=\'password\']').fill('admin123');
  await page.locator('button[type=\'submit\']').click();
  await page.pause();
});

test('CreatePer', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const pepito=new LoginPage(page)
    pepito.fillUsername()
    pepito.fillPassword()
    pepito.clickOnLogin()
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input[name=\'firstName\']').fill('Prueb14');
  await page.locator('input[name=\'middleName\']').fill('Prueba');
  await page.locator('input[name=\'lastName\']').fill('Prueba');
  await page.locator('button[type=\'submit\']').click();
  await page.waitForTimeout(2000)
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByPlaceholder('Type for hints...').first().fill('Prueb14');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('//div[contains(@class,\'oxd-table orangehrm-employee-list\')]')).toBeVisible();

  await page.pause();
});