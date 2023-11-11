const puppeteer = require('puppeteer')
const splitString = require('./util');
async function scrapeProductInfo(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.waitForSelector("h1");
  
    const ingredientsText = await page.evaluate(() => {
      const div = document.querySelector('#ingredients > div:first-child');
  
      if (div) {
          return div.textContent;
      } else {
          return null;
      }
    });
  
    const brandName = await page.$eval('[data-at="brand_name"]', element => element.textContent)
    const productName= await page.$eval('[data-at="product_name"]', element => element.textContent);

    const productPictureElements = await page.evaluate(() => {
      // Extract all picture tag elements
      const pictureTags = Array.from(document.querySelectorAll('picture'));
  
      // Extract the img tags within each picture tag
      const pictureData = pictureTags.map(picture => {
        const imgTags = Array.from(picture.querySelectorAll('img'));
        const productImgSrcs = imgTags.map(img => img.src).filter(src => src.includes('productimages'));
        return productImgSrcs[0];
      })
  
      return pictureData;
    });
  
    const productPictureSrc = productPictureElements.find(element => element !== null && element !== undefined);
  
    await browser.close();

    return {
        ingredients: ingredientsText,
        brandName,
        productName,
        productPictureSrc,
    }
}

module.exports = scrapeProductInfo;