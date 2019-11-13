import screenRecording, {sleep} from "./recording";

describe('test-bank', () => {
    beforeAll(async () => {
        await page.goto('https://www.unicareer.com/test-bank/', {waitUntil: 'networkidle0'})
    })

    it('login', async () => {
        async function testing() {
            await page.tap('input[type=number]')
            await page.keyboard.type('17717373367')
            await page.tap('input[type=password')
            await page.keyboard.type(process.env.UniCareerPassword)
            await page.tap('button[type=submit]')
            await page.waitFor('div.list')
            await sleep(5);
        }

        await Promise.all([
            testing(),
            screenRecording(page, page.viewport().width, page.viewport().height)
        ]);

        console.log('test done.')
    })
})
