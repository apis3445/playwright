const { test, expect } = require('@playwright/test');

test('Screenshot', async ({ page }) => {
    await page.goto("http://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator("#displayed-text").screenshot({ path: 'partial.png' });

    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: 'screenshot.png' })
    await expect(page.locator('#displayed-text')).toBeHidden();
})

test('Visual testing', async ({ page }) => {
    await page.goto("https://www.flightAware.com")
    const shot = await page.screenshot({
        animations: 'disabled',
        mask: [page.locator('#headerClock > span')]
    })
    expect(shot).toMatchSnapshot()

})