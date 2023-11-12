import React, { useState } from 'react';
import { First } from './components/First';
import { Second } from './components/Second';
import { Third } from './components/Third';
import { Fourth } from './components/Fourth';
import './App.css'

function App() {
  const [activeComponent, setActiveComponent] = useState(3);

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <First />;
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