    /*global chrome*/
import React, { useState } from 'react';
import { First } from './components/First';
import { Second } from './components/Second';
import { Third } from './components/Third';
import { Fourth } from './components/Fourth';
import './App.css'

function queryDom() {
  return document.getElementById('ingredients').outerHTML;
}

function App() {
  const [activeComponent, setActiveComponent] = useState<number>(1);
  const [imageURL, setImageURL] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [productName, setProductName] = useState<string>("");

  function querySeph() {
    const pictures = document.querySelectorAll('picture');
  
    const img = pictures[0].querySelector('img').src;
    const bname = document.querySelector('[data-at="brand_name"]').innerHTML;
    const pname = document.querySelector('[data-at="product_name"]').innerHTML;
  
    return {imageURL: img, brandName: bname, productName: pname };
  }

  const handleAnalyzeClick = async () => {
    setActiveComponent(1);
    const fetchTestURL = 'http://localhost:3000/submit';

    chrome.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
      let url = tabs[0].url;

      const res = await chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: queryDom,
      });

      const seph = await chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: querySeph,
      });

      try {
        const response = await fetch(fetchTestURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify({
            url: url,
            dom: res[0].result,
            imageURL: seph[0].result.imageURL,
            brandName: seph[0].result.brandName,
            productName: seph[0].result.productName
          }),
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error.message);
      }
      
      setImageURL('sss');

      setImageURL(seph[0].result.imageURL);
      setBrandName(seph[0].result.brandName);
      setProductName(seph[0].result.productName);
    });
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <First onAnalyzeClick={handleAnalyzeClick} />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      case 4:
        return <Fourth />;
      default:
        return null; // Render nothing if the state doesn't match any case
    }
  };
  
  return (
    <div className="App">
      {renderComponent()}
      <p>dsds</p>
      <p>{imageURL}</p>
      <p>{brandName}</p>
      <p>{productName}</p>
    </div>
  );
}

export default App;