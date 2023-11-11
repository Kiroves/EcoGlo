const express = require('express')
const puppeteer = require('puppeteer')
const splitString = require('./util');


const app = express()
const port = 3000

app.get('/', async(req, res) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183&icid2=products%20grid:p501777:product', { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  const boldtext = 'Clean at Sephora products are formulated without the following banned or restricted ingredients (please see Clean at Sephora landing page for full list of specific restrictions and allowances by category—this is not an exhaustive list):'
  const ingredientsText = await page.evaluate(() => {
    const div = document.querySelector('#ingredients > div:first-child');

    if (div) {
        return div.textContent;
    } else {
        return null;
    }
  })

  if (ingredientsText) {
    const r = splitString(ingredientsText, boldtext);
    console.log(r);
  }

  await page.content();
  await browser.close();
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})