const express = require('express')
const scrapeProductInfo = require('./scrape');

const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const productInfo = await scrapeProductInfo('https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183&icid2=products%20grid:p50177');
    res.json(productInfo);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})