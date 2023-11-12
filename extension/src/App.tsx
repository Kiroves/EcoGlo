    /*global chrome*/
import React, { useState } from 'react';
import { First } from './components/First';
import { Second } from './components/Second';
import { Third } from './components/Third';
import { Fourth } from './components/Fourth';
import './App.css'

function App() {
  const [activeComponent, setActiveComponent] = useState<number>(4);
  const [testText, setTestText] = useState<string>("");

  const handleAnalyzeClick = async () => {
    setActiveComponent(2);

    const fetchTestURL = 'http://localhost:3000/submit';

    // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    //   let url = tabs[0].url;
    // });

    chrome.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
      let url = tabs[0].url;
      try {
        const response = await fetch(fetchTestURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify({
            url: url
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
    </div>
  );
}

export default App;