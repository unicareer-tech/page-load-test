// import assert = require('assert');
import puppeteer from 'puppeteer'
import screenRecording from "./recording";

let page;
let browser;

describe('test-bank', () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: 'true' === process.env.ci,
        });
        page = await browser.newPage()

        afterAll(browser.close)
    });

    it('hello', async () => {
        async function testing() {
            await page.goto('https://www.unicareer.com/test-bank/', {waitUntil: 'networkidle2'});
        }

        await Promise.all([testing, () => screenRecording(page, null, null)])
    })
})
