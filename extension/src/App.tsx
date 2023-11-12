    /*global chrome*/
import React, { useEffect, useState } from 'react';
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
  const [summary, setSummary] = useState<Object>({average: 0});

  useEffect(() => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
      const currentTabId = tabs[0].id;

      const seph = await chrome.scripting.executeScript({
        target: {tabId: currentTabId},
        func: querySeph,
      });

      setImageURL(seph[0].result.imageURL);
      setBrandName(seph[0].result.brandName);
      setProductName(seph[0].result.productName);
    });
  }, []);

  function querySeph() {
    let pictures = document.querySelectorAll('picture.css-yq9732');

    const imgTag = pictures[0].querySelector('img');
  
    const img = imgTag.src;
    const bname = document.querySelector('[data-at="brand_name"]').innerHTML;
    const pname = document.querySelector('[data-at="product_name"]').innerHTML;
  
    return {imageURL: img, brandName: bname, productName: pname };
  }

  const handleAnalyzeClick = async () => {
    setActiveComponent(2);
    const fetchTestURL = 'http://localhost:3000/submit';

    chrome.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
      let url = tabs[0].url;
      const currentTabId = tabs[0].id;

      const res = await chrome.scripting.executeScript({
        target: {tabId: currentTabId},
        func: queryDom,
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
          }),
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();

        setTimeout(() => {
          setActiveComponent(3);
          setSummary(data);
          console.log('Response:', data);
        }, 3000);
        
        
      } catch (error) {
        console.error('Error:', error.message);
      }
    });
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <First onAnalyzeClick={handleAnalyzeClick} productName={productName} brandName={brandName} imgUrl={imageURL} />;
      case 2:
        return <Second />;
      case 3:
        // @ts-ignore
        return <Third score={summary.average}/>;
      case 4:
        return <Fourth />;
      default:
        return null; // Render nothing if the state doesn't match any case
    }
  };
  
  return (
    <div className="App">
      {renderComponent()}
    </div>
  );
}

export default App;