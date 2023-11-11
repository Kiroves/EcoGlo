const express = require('express')
const puppeteer = require('puppeteer')

const app = express()
const port = 3000

app.get('/', async(req, res) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183&icid2=products%20grid:p501777:product', { waitUntil: "networkidle2" });
  await page.waitForSelector("h1");

  // Find the element with class 'ingredients'
  const ingredientsElement = await page.$('#ingredients');

  if (ingredientsElement) {
    // Use page.evaluate to run a function in the context of the page
    const firstDivInsideIngredients = await ingredientsElement.evaluate(() => {
      // Find the first div inside the 'ingredients' element
      const firstDiv = document.querySelector('#ingredients > div:first-child');

      if (firstDiv) {
        // Return any information you need from the first div (e.g., text content)
        return {
          textContent: firstDiv.textContent,
          // Add more properties as needed
        };
      }

      // Return null if the first div is not found
      return null;
    });

    if (firstDivInsideIngredients) {
      console.log('Text Content of the 1st Div inside "ingredients":', firstDivInsideIngredients.textContent);
    } else {
      console.log('1st Div inside "ingredients" not found.');
    }
  } else {
    console.log('Element with class "ingredients" not found.');
  }
  let a = await page.content();
  await browser.close();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})