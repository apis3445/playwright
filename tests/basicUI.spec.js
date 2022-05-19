const { test, expect } = require('@playwright/test');

test.describe('New Todo', () => {

test('Another first test',async ({browser}) => {
    const context = await browser.newContext({ ignoreHTTPSError: true });
    const page = await context.newPage();

    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control')
    const cardTitles = page.locator('.card-body a');
    const adminRadio = page.locator('.radiotextsty').last();
    const documentLink = page.locator('[href*="documents-request"]')
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title());
    await userName.type('rahulsheety')
    await page.locator('[type="password"]').type('learning');
    await dropdown.selectOption('consult')
    await adminRadio.click();
    await expect(adminRadio).toBeChecked();
    console.log(await adminRadio.isChecked())
    await page.locator('#okayBtn').click()
    await page.locator('#terms').click();
    await page.pause()
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await page.pause()
    await expect(documentLink).toHaveAttribute("class","blinkingText")
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
    await userName.fill("")
    await userName.fill('rahulshettyacademy')
    await Promise.all([
        page.waitForNavigation(),
        signIn.click(),
    ])
    //console.log(await cardTitles.nth(1).textContent())
    //console.log(await cardTitles.first().textContent())
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles)
})
})

test('Another first test',async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const documentLink = page.locator('[href*="documents-request"]')
    await page.goto("http://rahulshettyacademy.com/loginpagePractise/")
    const [newPage] = await Promise.all(
       [
        context.waitForEvent('page'),
        documentLink.click()
       ] 
    )
    text = await newPage.locator(".register-btn").textContent()
    console.log(text)
    await userName.type("aa")
    await page.pause();
    console.log(await userName.textContent())
}) 