const { test, expect } = require('@playwright/test');

test('Another  test',async ({page}) => {
    const email = "anshika@gmail.com"
    const products = page.locator('.card-body')
    const productName = "Soil"
    await page.goto("http://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill(email)
    await page.locator('#userPassword').fill("Iamking@000")
    await page.locator('[value="Login"]').click()
    await page.waitForLoadState('networkidle')
    const count = await products.count()
    for(let i=0; i<count; ++i)
    {
        if (await products.nth(i).locator("b").textContent() === productName){
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }             
    await page.waitForLoadState('networkidle')    
    await page.locator("button[routerlink='/dashboard/cart']").dispatchEvent('click')
   
   await page.locator("div.cart li").first().waitFor();
   const isVisible = page.locator("h3:has-text('"+productName+"')").isVisible()
   expect (isVisible).toBeTruthy();
})