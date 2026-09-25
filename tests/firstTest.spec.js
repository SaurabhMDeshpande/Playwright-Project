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
  
 



});

test('Login User', async({page})=>{
  
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const productname = "iphone 13 pro";
  await expect(page).toHaveTitle("Let's Shop");
  await page.locator("//input[@id='userEmail']").fill("saurabhdeshp99@gmail.com");
  await page.locator("//input[@id='userPassword']").fill("Saurabh@123");
  await page.locator("//input[@type='submit']").click();

  const products = page.locator("//div[@class='card-body']//b");

  await page.locator("//div[@class='card-body']//b").first().waitFor();
console.log(await products.allTextContents());

for(let i=0;i<await products.count();i++)
{
  if(await products.nth(i).textContent()===productname)
    {

    await page.locator("//button[@class='btn w-10 rounded']").nth(i).click();
  }

}

await page.locator("//button[@routerlink='/dashboard/cart']").click();

await page.locator("//div[@class='cartSection']//h3").waitFor();

await expect(page.locator("//div[@class='cartSection']//h3")).toHaveText(productname);


page.pause();


}
);

