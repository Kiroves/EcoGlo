const express = require('express')
const splitString = require('./util');
const scrapeProductInfo = require('./scrape');
const sustainableIngredients = require('./analyze');
const unsustainableIngredients = require('./analyze');
const app = express()
const port = 3000

const IngredientsMap = {};

for (const ingredient of sustainableIngredients) {
  IngredientsMap[ingredient.name] = ingredient;
}
for (const ingredient of unsustainableIngredients) {
  IngredientsMap[ingredient.name] = ingredient;
}


app.get('/', async (req, res) => {
  const productInfo = await scrapeProductInfo('https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183&icid2=products%20grid:p50177');
  const boldText = 'Clean at Sephora products are formulated without the following banned or restricted ingredients (please see Clean at Sephora landing page for full list of specific restrictions and allowances by category—this is not an exhaustive list):'
  console.log(splitString(productInfo.ingredients, boldText))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})