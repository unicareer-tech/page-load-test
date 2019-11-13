// import assert = require('assert');
import puppeteer from 'puppeteer'
import screenRecording from "./recording";

let page;
let browser;
let width = 1080, height = 800;

describe('test-bank', () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: 'true' === process.env.ci,
            args: [`--window-size=${width},${height}`]
        });
        page = await browser.newPage()

        afterAll(browser.close)
    });

    it('hello', async () => {
        async function testing() {
            await page.goto('https://www.unicareer.com/test-bank/', {waitUntil: 'networkidle2'});
            const client = await page.target().createCDPSession()
        }

        testing()
        screenRecording(page, width, height)
    })
})
