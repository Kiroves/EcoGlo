const express = require('express')
const puppeteer = require('puppeteer')

const app = express()
const port = 3000

app.get('/', async(req, res) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183&icid2=products%20grid:p501777:product', { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");
  const t = await page.$('#ingredients')
  let a = await page.content();
  console.log(t.textContent);
  await browser.close();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})