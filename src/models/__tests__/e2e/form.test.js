import puppetteer from 'puppeteer'
jest.setTimeout(30000)
// default puppeteer timeout

describe('Card validation form', () => {
  let browser = null
  let page = null
  const baseUrl = 'http://localhost:8080'

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 15,
      devtools: true, // show devTools
    })
    page = await browser.newPage()
  })
  
  afterAll(async() => {
    await browser.close()
  })

  test('should add .logo-active class for visa', async() => {
    await page.goto(baseUrl)
    const widgetContainer = await page.$('#widget')
    const logosContainer = await page.$('#logos')
    const form = await page.$('#form')
    const input = await form.$('#form-input')
    await input.type('4111111111111111')
    const submit = await form.$('#form-submit')
    submit.click();
    await page.waitForSelector('[data-logo="visa"].logo-active')
  })

  test('should display error', async() => {
    await page.goto(baseUrl)
    const widgetContainer = await page.$('#widget')
    // const logosContainer = await page.$('#logos')
    const form = await page.$('#form')
    const input = await form.$('#form-input')
    await input.type('4111111111111113')
    const submit = await form.$('#form-submit')
    submit.click();
    await page.waitForSelector('#error-message')
  })
})
