// @ts-check
import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {

  const email ="saurabhd4498@gmail.com";
  const password = "Mouse1998@98";
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.locator('text=Register').click();
  await page.getByTestId('register-email').fill(email);
   await page.getByTestId('register-email').dblclick();
  await page.locator('id=register-password').fill(password);
  await page.locator('id=register-password').fill(password);
  await page.getByRole('textbox', { name: 'Repeat your password' }).fill(password);
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Email already registered').isVisible();

  await page.getByText('Sign in').click();
  await page.locator('css=input[placeholder="you@email.com"]').fill(email);
  await page.locator('css=input[placeholder="••••••"]').fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
   


  // you@email.com

  await page.pause()



})