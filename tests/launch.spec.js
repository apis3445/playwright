const { test, expect } = require('@playwright/test');

test('Launch', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    // Go to https://www.nike.com/cn/launch
    await page.goto('https://www.nike.com/cn/launch');
    // Click text=加入/登录 >> nth=0
    await page.locator('text=加入/登录').first().click();
    // Click text=立即加入
    await page.locator('text=立即加入').click();
    // Click [placeholder="手机号码"]
    await page.locator('[placeholder="手机号码"]').click();
    // Fill [placeholder="手机号码"]
    await page.locator('[placeholder="手机号码"]').fill('12345678990');
    // Click [placeholder="输入验证码"]
    await page.locator('[placeholder="输入验证码"]').click();
    // Fill [placeholder="输入验证码"]
    await page.locator('[placeholder="输入验证码"]').fill('1234');
    // Click input:has-text("继续")
    await page.locator('input:has-text("继续")').click();
});