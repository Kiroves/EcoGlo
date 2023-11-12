const puppeteer = require('puppeteer')
const splitString = require('./util');
async function scrapeProductInfo(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(url)

    const ingredientsText = await page.evaluate(() => {
      const div = document.querySelector('#ingredients > div:first-child');
  
      if (div) {
          return div.textContent;
      } else {
          return null;
      }
    });
    await browser.close();
    return ingredientsText
}

module.exports = scrapeProductInfo;