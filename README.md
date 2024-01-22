# EcoGlo: Revolutionizing Beauty Sustainability with Tech 
As part of Hack the Change 2023 (Finalist)\
Devpost: https://devpost.com/software/ecoglo
Demo: https://www.youtube.com/watch?v=zcmkQppVMFM&t=62s

## Inspiration

With the beauty industry contributing to significant environmental degradation – from water pollution to deforestation – we were inspired to create a change. The lack of transparency and understanding of product ingredients has led to a growing concern among consumers who are eager to make sustainable choices. We recognized the urgent need to bridge this gap with technology.

## What It Does

EcoGlo is a Google Chrome extension that seamlessly integrates with Sephora's online store, providing a detailed 'Sustainability Score' for beauty products based on their ingredients with one click of a button.

Given an beauty product, EcoGlo will web-scrape the page to determine product information like the name, brand, and ingredients list.

Using this information, EcoGlo will run its sustainability and ingredients analyzer algorithms based on sustainable beauty product research. EcoGlo will then give you:

 - A sustainability rating based on the ingredients (score out of 10)
 - List of sustainable ingredients, with descriptions
 - List of harmful ingredients, with descriptions

## How We Built It

We started by using Figma to design wireframes and brand design ideas. Then, we leveraged React to build a dynamic frontend that communicates with our Express server. Our backend, written in Express.js, uses Puppeteer for web scraping. To design our algorithms, we reviewed various scientific articles and utilized the power of LLM's to parse them.

## Challenges We Ran Into

One of the main challenges was working with React and TypeScript to build a Chrome extension. We encountered many problems relating to the Chrome API and styling the extension through out the hackathon.

## Accomplishments That We're Proud Of

Developing a user-centric tool that empowers consumers with the knowledge to make environmentally responsible choices. We're also proud of the technical implementation that required us to dive deep into web scraping and frontend development with React, further solidifying our skills.

## What We Learned

We gained invaluable insights into the intersection of environmental science and technology. On the technical side, we learned to optimize web scraping for performance and handle cross-origin requests efficiently. We also explored the depths of TypeScript in building scalable and maintainable frontend applications.

## What's Next for EcoGlo

We are committed to expanding our database, refining our scoring algorithm, and incorporating machine learning to improve accuracy. Our goal is to support more retailers and broaden our impact, driving the beauty industry towards genuine sustainability.
