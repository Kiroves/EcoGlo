const express = require('express')
const utils = require('./util');
const scrapeProductInfo = require('./scrape');
const sustainableIngredients = require('./list');
const calculateAverage = require('./calcualte');
const getMatchingIngredients = require('./analyze');
const app = express()
app.use(express.json());
const port = 3000

const IngredientsMap = {};

for (const ingredient of sustainableIngredients) {
  IngredientsMap[ingredient.name] = ingredient;
}


app.post('/submit', async (req, res) => {
  const dom = req.body.dom
  const productInfo = await scrapeProductInfo("<html>" + dom + "</html>");
  const boldText = 'Clean at Sephora products are formulated without the following banned or restricted ingredients (please see Clean at Sephora landing page for full list of specific restrictions and allowances by category—this is not an exhaustive list):'
  const ingredients = utils.splitString(productInfo, boldText);
  const ingredientsList = utils.getIngredientsList(ingredients);
  const {sustainableList, unsustainableList, missingList} = getMatchingIngredients(IngredientsMap, ingredientsList);
  const average = calculateAverage(sustainableList, unsustainableList);
  res.json({sustainableList, unsustainableList, average})
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})