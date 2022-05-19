const { test, expect, request } = require('@playwright/test');

let token;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const email = "anshika@gmail.com"
    const loginPayload = { userEmail: email, userPassword: "Iamking@000" }
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: loginPayload
        })
    expect(loginResponse.ok()).toBeTruthy();
    const body = await loginResponse.json();
    token = body.token;
    console.log(token)
})

test('Another  test', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token)
    await page.goto("https://rahulshettyacademy.com/client")
    const products = page.locator('.card-body')
    const productName = "Soil"
    const count = await products.count()
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.waitForLoadState('networkidle')
    await page.locator("button[routerlink='/dashboard/cart']").dispatchEvent('click')

    await page.locator("div.cart li").first().waitFor();
    const isVisible = page.locator("h3:has-text('" + productName + "')").isVisible()
    expect(isVisible).toBeTruthy();
})