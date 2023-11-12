import React, { useState } from 'react';
import { First } from './components/First';
import { Second } from './components/Second';
import './App.css'

function App() {
  const [activeComponent, setActiveComponent] = useState(2);

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
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