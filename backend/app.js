const express = require('express')
const axios = require('axios');
const cheerio = require('cheerio');


const app = express()
const port = 3000

app.get('/', (req, res) => {

  const url = 'https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183&icid2=products%20grid:p501777:product'
  
  axios.get(url).then((response) => {
    console.log(response)
    // Load the HTML content into Cheerio
    // const $ = cheerio.load(response.data);

    // // Find the element containing "Ingredients"
    // const ingredientsElement = $('*:contains("Ingredients:")');

    // // Check if the element is found
    // if (ingredientsElement.length > 0) {
    //   // Navigate to the next div to get the ingredients
    //   const ingredients = ingredientsElement.next('div').text().trim();
      
    //   // Print or process the ingredients
    //   console.log('Ingredients:', ingredients);
    // } else {
    //   console.log('Ingredients not found on the page.');
    // }
  })
  .catch((error) => {
    console.error('Error fetching the page:', error);
  });

  res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})