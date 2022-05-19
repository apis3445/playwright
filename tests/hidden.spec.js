const { test, expect } = require('@playwright/test');

test("Popup validations", async ({ page }) => {
    await page.goto("http://rahulshettyacademy.com/AutomationPractice/")
    //await page.goBack();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framesPage = page.frameLocator("#courses-iframe")
    framesPage.locator("li a[href*='lifetime-access']:visible").click()
    const textSubscribers = await (await framesPage.locator(".text h2").textContent()).split(" ")[1];
    console.log(textSubscribers)
    //page.on("dialog", dialog => dialog.dismiss);
})