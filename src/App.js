import React, { useState } from 'react';
import './App.css';
import MindArViewer from './components/MindArViewer';

function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
      <h1>AR Scanner</h1>

      <div className="control-buttons">
        {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
        {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
      </div>

      {started === 'aframe' && (
        <div className="container">
          <MindArViewer />
          <video></video>
        </div>
      )}
    </div>
  );
}

export default App;