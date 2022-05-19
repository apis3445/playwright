const { test, expect } = require('@playwright/test');
const data = JSON.parse(JSON.stringify(require("../data/placeOrderData.json")))

test.describe('Session storage', () => {

    let webContext;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("http://rahulshettyacademy.com/client")
        await page.locator('#userEmail').fill(data.username)
        await page.locator('#userPassword').fill(data.password)
        await page.locator('[value="Login"]').click()
        await page.waitForLoadState('networkidle')
        await context.storageState({ path: 'state.json' })
        webContext = await browser.newContext({ storageState: 'state.json' })
    })

    test.only('Session storage', async () => {
        const page = await webContext.newPage();
        await page.goto("http://rahulshettyacademy.com/client")
        const products = page.locator('.card-body')
        const productName = "Soil"
        const count = await products.count()
        for (let i = 0; i < count; ++i) {
            if (await products.nth(i).locator("b").textContent() === productName) {
                await products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    })


})