import puppeteer from 'puppeteer';
import {Image} from "./image"

export class PicGenerator {

    private img = new Image();

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
            // dom.style.setProperty("background-color", "blue", "important");
            dom.style.setProperty("background-image", "url('https://images.unsplash.com/photo-1508456939591-ff69e38c6dcb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcyMDQ1fQ')");
            dom.innerHTML = "change to something"
        });

        const element = await page.$('#output');
        await element.screenshot({path: filename});
        await browser.close();

        return filename;
    }

}