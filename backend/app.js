const express = require('express')
const utils = require('./util');
const scrapeProductInfo = require('./scrape');
const sustainableIngredients = require('./list');
const calculateAverage = require('./calcualte');
const app = express()
const port = 3000

const IngredientsMap = {};

for (const ingredient of sustainableIngredients) {
  IngredientsMap[ingredient.name] = ingredient;
}
console.log(calculateAverage(sustainableIngredients));


app.get('/', async (req, res) => {
  const productInfo = await scrapeProductInfo('https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183&icid2=products%20grid:p50177');
  const boldText = 'Clean at Sephora products are formulated without the following banned or restricted ingredients (please see Clean at Sephora landing page for full list of specific restrictions and allowances by category—this is not an exhaustive list):'
  const ingredients = utils.splitString(productInfo.ingredients, boldText);
  const ingredientsList = utils.getIngredientsList(ingredients);
  console.log(ingredientsList);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})