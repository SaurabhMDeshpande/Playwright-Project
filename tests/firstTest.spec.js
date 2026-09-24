// @ts-check
import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Let's Shop");
  await page.locator("//a[@routerlink='/auth/register']").click();
  await page.locator("//input[@id='firstName']").fill("Saurabh");
  await page.locator("//input[@id='lastName']").fill("Deshpande");
  const username = `saurabhdeshp99${Date.now()}@gmail.com`;
  await page.locator("//input[@id='userEmail']").fill(username);
  await page.locator("//input[@id='userPassword']").fill("Saurabh@123");
  await page.locator("//input[@id='confirmPassword']").fill("Saurabh@123");
  await page.locator("//input[@id='userMobile']").fill("1234567890");
  await page.locator("//select[@formcontrolname='occupation']").selectOption("Engineer");
  await page.locator("//input[@value='Male']").click();
  await page.locator("//input[@formcontrolname='required']").click();
  await page.locator("//input[@type='submit']").click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.pause();



});


