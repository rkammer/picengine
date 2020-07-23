import puppeteer from 'puppeteer';

export class PicGenerator {

    getFileName() {
        const d : Date = new Date();
        return `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}-${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
    }

    async generate() : Promise<string> {

        const filename = `./output/${this.getFileName()}.png`;

        const browser : puppeteer.Browser = await puppeteer.launch();
        const page    : puppeteer.Page    = await browser.newPage();
        await page.goto(`file://${process.cwd()}/bin/assets/html/image.html`);

        await page.evaluate(() => {
            let dom : HTMLElement = document.querySelector('#output');
            dom.style.setProperty("background-color", "blue", "important");
            dom.innerHTML = "change to something"
        });

        const element = await page.$('#output');
        await element.screenshot({path: filename});
        await browser.close();

        return filename;
    }

}