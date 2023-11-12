const express = require('express')
const utils = require('./util');
const scrapeProductInfo = require('./scrape');
const sustainableIngredients = require('./list');
const calculateAverage = require('./calcualte');
const getMatchingIngredients = require('./analyze');
const app = express()
const port = 3000

const IngredientsMap = {};

for (const ingredient of sustainableIngredients) {
  IngredientsMap[ingredient.name] = ingredient;
}
const average = calculateAverage(sustainableIngredients);


app.get('/', async (req, res) => {
  const productInfo = await scrapeProductInfo('https://www.sephora.com/ca/en/product/hydro-grip-primer-dewy-setting-spray-makeup-set-P507133?icid2=homepage_productlist_brandnewadditions_ca_rwd_092022');
  const boldText = 'Clean at Sephora products are formulated without the following banned or restricted ingredients (please see Clean at Sephora landing page for full list of specific restrictions and allowances by category—this is not an exhaustive list):'
  const ingredients = utils.splitString(productInfo.ingredients, boldText);
  const ingredientsList = utils.getIngredientsList(ingredients);
  const ret = getMatchingIngredients(IngredientsMap, ingredientsList);
  console.log(ret);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})