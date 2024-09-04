import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';


test('Inicio', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
  const pepito=new LoginPage(page)
    pepito.fillUsername()
    pepito.fillPassword()
    pepito.clickOnLogin()
    await page.pause();
  });
test('Personal', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
    const pepito=new LoginPage(page)
      pepito.fillUsername()
      pepito.fillPassword()
      pepito.clickOnLogin()
      await page.pause();
    });

    test('CreatePersonal', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const pepito=new LoginPage(page)
    pepito.fillUsername()
    pepito.fillPassword()
    pepito.clickOnLogin()
    await page.pause();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('input[name=\'firstName\']').fill('Prueb14');
    await page.locator('input[name=\'middleName\']').fill('Prueba');
    await page.locator('input[name=\'lastName\']').fill('Prueba');
    await page.locator('button[type=\'submit\']').click();
    expect(page.locator('button[type=\'submit\']')).toBeVisible();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByPlaceholder('Type for hints...').first().fill('Prueb14');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator('//div[contains(@class,\'oxd-table orangehrm-employee-list\')]')).toBeVisible();
  
    await page.pause();
  });